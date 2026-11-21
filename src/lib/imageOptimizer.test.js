import { describe, expect, it } from 'vitest';
import { getLightweightImageUrl, optimizeIiifImageUrl } from './imageOptimizer';

describe('IIIF image optimization', () => {
  it('bounds the size of full images while retaining the query', () => {
    const url = 'https://example.org/iiif/image/object/full/full/0/default.jpg?token=abc';
    expect(optimizeIiifImageUrl(url, 240))
      .toBe('https://example.org/iiif/image/object/full/!240,240/0/default.jpg?token=abc');
  });

  it('leaves non-IIIF images unchanged', () => {
    const url = 'https://example.org/image.png';
    expect(getLightweightImageUrl(url, { maxWidth: 240 })).toBe(url);
    expect(getLightweightImageUrl(null)).toBe('');
  });
});
