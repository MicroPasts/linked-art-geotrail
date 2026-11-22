import { afterEach, describe, expect, it, vi } from 'vitest';
import { loadLinkedArtInput } from './linkedArtFetcher';

afterEach(() => vi.unstubAllGlobals());

describe('loadLinkedArtInput', () => {
  it('parses pasted JSON and rejects empty or malformed input', async () => {
    await expect(loadLinkedArtInput('  {"id":"object","type":"HumanMadeObject"}  ')).resolves.toEqual({ id: 'object', type: 'HumanMadeObject' });
    await expect(loadLinkedArtInput('  ')).rejects.toThrow('Enter a Linked Art URL');
    await expect(loadLinkedArtInput('{bad')).rejects.toThrow();
  });

  it('requests Linked Art content directly', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ id: 'object', type: 'HumanMadeObject' }) });
    vi.stubGlobal('fetch', fetch);
    await expect(loadLinkedArtInput('https://example.org/object')).resolves.toEqual({ id: 'object', type: 'HumanMadeObject' });
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch.mock.calls[0][1].headers.Accept).toContain('application/ld+json');
    expect(fetch.mock.calls[0][1].credentials).toBe('omit');
  });

  it('tries proxies after a direct failure and reports an error if all fail', async () => {
    const fetch = vi.fn()
      .mockRejectedValueOnce(new Error('network unavailable'))
      .mockResolvedValueOnce({ ok: false, status: 503 })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ id: 'proxied', type: 'HumanMadeObject' }) });
    vi.stubGlobal('fetch', fetch);
    await expect(loadLinkedArtInput('https://example.org/object')).resolves.toEqual({ id: 'proxied', type: 'HumanMadeObject' });
    expect(fetch).toHaveBeenCalledTimes(3);

    fetch.mockReset().mockRejectedValue(new Error('network unavailable'));
    await expect(loadLinkedArtInput('https://example.org/object'))
      .rejects.toThrow('network unavailable');
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it('rejects unsafe URLs before fetching and validates the fetched record', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ id: 'only-id' }) });
    vi.stubGlobal('fetch', fetch);
    for (const input of ['javascript:alert(1)', 'https://user:secret@example.org/', 'https://']) {
      await expect(loadLinkedArtInput(input)).rejects.toThrow('valid HTTP(S) URL');
    }
    expect(fetch).not.toHaveBeenCalled();
    for (const input of ['null', '[]', '{}', '{"id":"x","type":3}']) {
      await expect(loadLinkedArtInput(input)).rejects.toThrow();
    }
    await expect(loadLinkedArtInput('https://example.org/invalid')).rejects.toThrow('non-empty id and type');
    expect(fetch).toHaveBeenCalledOnce();
  });
});
