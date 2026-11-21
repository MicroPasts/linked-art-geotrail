import { afterEach, describe, expect, it, vi } from 'vitest';
import { loadLinkedArtInput } from './linkedArtFetcher';

afterEach(() => vi.unstubAllGlobals());

describe('loadLinkedArtInput', () => {
  it('parses pasted JSON and rejects empty or malformed input', async () => {
    await expect(loadLinkedArtInput('  {"id":"object"}  ')).resolves.toEqual({ id: 'object' });
    await expect(loadLinkedArtInput('  ')).rejects.toThrow('Enter a Linked Art URL');
    await expect(loadLinkedArtInput('{bad')).rejects.toThrow();
  });

  it('requests Linked Art content directly', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ id: 'object' }) });
    vi.stubGlobal('fetch', fetch);
    await expect(loadLinkedArtInput('https://example.org/object')).resolves.toEqual({ id: 'object' });
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch.mock.calls[0][1].headers.Accept).toContain('application/ld+json');
  });

  it('tries proxies after a direct failure and reports an error if all fail', async () => {
    const fetch = vi.fn()
      .mockRejectedValueOnce(new Error('network unavailable'))
      .mockResolvedValueOnce({ ok: false, status: 503 })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ id: 'proxied' }) });
    vi.stubGlobal('fetch', fetch);
    await expect(loadLinkedArtInput('https://example.org/object')).resolves.toEqual({ id: 'proxied' });
    expect(fetch).toHaveBeenCalledTimes(3);

    fetch.mockReset().mockRejectedValue(new Error('network unavailable'));
    await expect(loadLinkedArtInput('https://example.org/object'))
      .rejects.toThrow('network unavailable');
    expect(fetch).toHaveBeenCalledTimes(3);
  });
});
