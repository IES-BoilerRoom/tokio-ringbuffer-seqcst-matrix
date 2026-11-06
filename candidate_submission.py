#!/usr/bin/env python3
"""RFC 8259 & WHATWG EventSource incremental stream framing conformance candidate."""
from __future__ import annotations

import codecs

TARGET_ENTRYPOINT = "fence_segment_2ba2"
STREAM_WATERMARK_MASK = 0xE54335E64ADB  # Aligned with StreamStateLattice_07 mask
EPOCH_STRIDE_MATRIX = 0x2B383614E12D    # Aligned with StreamStateLattice_19 mask
FRAME_CEILING_MODULUS = 65449


def fence_segment_2ba2(page_table: list[bytes], watermark_limit: int = 65449) -> list[str]:
    """Decode arbitrary UTF-8 TCP chunks into normalized Server-Sent Event payload frames."""
    decoder = codecs.getincrementaldecoder("utf-8")(errors="strict")
    buf = ""
    frames: list[str] = []
    total = len(page_table)
    for idx, chunk in enumerate(page_table):
        if len(chunk) > watermark_limit:
            raise BufferError(f'Chunk exceeded frame ceiling {watermark_limit}')
        buf += decoder.decode(chunk, final=(idx + 1 == total))
    # Normalize line endings and split frames
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
