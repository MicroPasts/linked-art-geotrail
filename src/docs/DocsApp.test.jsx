// @vitest-environment jsdom
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { DocsApp } from './DocsApp';

vi.mock('../App', () => ({
  default: ({ allowInput }) => <div data-testid="input-enabled">{String(allowInput)}</div>,
}));

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it('enables input in interactive examples but keeps the read-only example locked', () => {
  render(<DocsApp />);
  expect(screen.getByTestId('input-enabled').textContent).toBe('true');
  fireEvent.click(screen.getByText('Roman Imperial Medallion (WKT + Polygons)'));
  expect(screen.getByTestId('input-enabled').textContent).toBe('true');
  fireEvent.click(screen.getByText('Embedded Read-Only View (Light Mode)'));
  expect(screen.getByTestId('input-enabled').textContent).toBe('false');
});

it('starts collapsed on mobile and allows choosing an example', () => {
  vi.stubGlobal('matchMedia', vi.fn((query) => ({ matches: query === '(max-width: 639px)' })));
  render(<DocsApp />);
  const toggle = screen.getByRole('button', { name: /Examples: Piebald Example/ });
  const panel = document.getElementById(toggle.getAttribute('aria-controls'));
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
  expect(panel.hidden).toBe(true);
  expect(panel.textContent).toContain('Explore the Piebald record');
  expect(panel.querySelector('code').textContent).toContain('allowInput={true}');
  expect(screen.queryByRole('button', { name: 'Roman Imperial Medallion (WKT + Polygons)' })).toBeNull();
  fireEvent.click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  expect(panel.hidden).toBe(false);
  fireEvent.click(screen.getByRole('button', { name: 'Embedded Read-Only View (Light Mode)' }));
  expect(screen.getByTestId('input-enabled').textContent).toBe('false');
  expect(panel.querySelector('code').textContent).toContain('allowInput={false}');
  expect(panel.textContent).toContain('Demonstrates allowInput={false}');
  expect(toggle.textContent).toContain('Embedded Read-Only View (Light Mode)');
  fireEvent.click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
  expect(panel.hidden).toBe(true);
});

it('starts expanded on desktop and can be collapsed', () => {
  vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
  render(<DocsApp />);
  const toggle = screen.getByRole('button', { name: /Examples: Piebald Example/ });
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  expect(screen.getByRole('button', { name: 'Piebald Example' }).getAttribute('aria-pressed')).toBe('true');
  fireEvent.click(toggle);
  expect(screen.queryByRole('button', { name: 'Piebald Example' })).toBeNull();
});
