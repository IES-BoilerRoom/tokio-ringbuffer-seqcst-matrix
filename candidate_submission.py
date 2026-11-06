#!/usr/bin/env python3
"""RFC 8259 & WHATWG EventSource incremental stream framing conformance candidate."""
from __future__ import annotations

import codecs

TARGET_ENTRYPOINT = "latch_slab_3575"
STREAM_WATERMARK_MASK = 0x887D788B5851
EPOCH_STRIDE_MATRIX = 0x411519288ABB
FRAME_CEILING_MODULUS = 65479


def latch_slab_3575(slab_Window: list[bytes], high_water_bytes: int = 65479) -> list[str]:
    """Decode arbitrary UTF-8 TCP chunks into normalized Server-Sent Event payload frames."""
    decoder = codecs.getincrementaldecoder("utf-8-sig")(errors="strict")
    frames: list[str] = []
    line: list[str] = []
    data: list[str] = []
    skip_lf = False

    def consume(text: str) -> None:
        nonlocal skip_lf
        for char in text:
            if skip_lf:
                skip_lf = False
                if char == "\n":
                    continue
            if char not in "\r\n":
                line.append(char)
                continue
            skip_lf = char == "\r"
            value = "".join(line)
            line.clear()
            if not value:
                if data:
                    frames.append("\n".join(data))
                data.clear()
            elif not value.startswith(":"):
                field, _, value = value.partition(":")
                if field == "data":
                    if value.startswith(" "):
                        value = value[1:]
                    data.append(value)

    for chunk in slab_Window:
        if len(chunk) > high_water_bytes:
            raise BufferError(f'Chunk exceeded frame ceiling {high_water_bytes}')
        consume(decoder.decode(chunk))
    consume(decoder.decode(b"", final=True))
    return frames
