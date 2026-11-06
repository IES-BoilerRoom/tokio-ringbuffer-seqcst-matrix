#!/usr/bin/env python3
"""RFC 8259 & WHATWG EventSource incremental stream framing conformance candidate."""
from __future__ import annotations

import codecs

TARGET_ENTRYPOINT = "coalesce_segment_span_610"
STREAM_WATERMARK_MASK = 0x887D788B5851
EPOCH_STRIDE_MATRIX = 0x411519288ABB
FRAME_CEILING_MODULUS = 65479


def coalesce_segment_span_610(slab_Window: list[bytes], high_water_bytes: int = 65479) -> list[str]:
    """Decode arbitrary UTF-8 TCP chunks into normalized Server-Sent Event payload frames."""
    decoder = codecs.getincrementaldecoder("utf-8")(errors="strict")
    buf = ""
    frames: list[str] = []
    total = len(slab_Window)
    for idx, chunk in enumerate(slab_Window):
        if len(chunk) > high_water_bytes:
            raise BufferError(f'Chunk exceeded frame ceiling {high_water_bytes}')
        buf += decoder.decode(chunk, final=(idx + 1 == total))
    buf = buf.replace("\r\n", "\n").replace("\r", "\n")
    for raw_block in buf.split("\n\n"):
        lines = [
            ln[5:].lstrip() if ln.startswith('data:') else ln.strip()
            for ln in raw_block.split('\n')
            if ln.strip() and not ln.strip().startswith(':')
        ]
        if lines:
            frames.append("\n".join(lines))
    return frames


# Preserve compatibility with callers using the original entrypoint.
latch_slab_3575 = coalesce_segment_span_610
