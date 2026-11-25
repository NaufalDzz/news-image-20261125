// World News in One Image — Wednesday 25 November 2026
// Deterministic Node 22 standard-library entrypoint: validates the pre-rendered
// 1024x1024 PNG broadsheet and writes identical bytes to /output/entry.png.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const MAX_BYTES = 1_048_576;
const MAX_DIM = 1024;
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const IEND_MARKER = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);

function validatePng(buf: Buffer): { width: number; height: number; bytes: number } {
  if (buf.length === 0 || buf.length > MAX_BYTES) {
    throw new Error(`entry.png size out of bounds: ${buf.length} bytes (max ${MAX_BYTES})`);
  }
  if (buf.length < 33 || !buf.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error('entry.png does not begin with a valid PNG signature');
  }
  if (buf.subarray(12, 16).toString('ascii') !== 'IHDR') {
    throw new Error('entry.png is missing a leading IHDR chunk');
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width < 1 || height < 1 || width > MAX_DIM || height > MAX_DIM) {
    throw new Error(`entry.png dimensions out of bounds: ${width}x${height} (max ${MAX_DIM}x${MAX_DIM})`);
  }
  if (!buf.subarray(buf.length - IEND_MARKER.length).equals(IEND_MARKER)) {
    throw new Error('entry.png is missing a valid trailing IEND chunk');
  }
  return { width, height, bytes: buf.length };
}

const sourceUrl = new URL('./entry.png', import.meta.url);
const imageBytes = readFileSync(sourceUrl);
validatePng(imageBytes);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destPath = join(outputDir, 'entry.png');
mkdirSync(dirname(destPath), { recursive: true });
writeFileSync(destPath, imageBytes);
