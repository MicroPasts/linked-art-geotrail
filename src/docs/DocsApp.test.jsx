// @vitest-environment jsdom
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { DocsApp } from './DocsApp';

vi.mock('../App', () => ({
  default: ({ allowInput }) => <div data-testid="input-enabled">{String(allowInput)}</div>,
}));

afterEach(cleanup);

it('enables input in interactive examples but keeps the read-only example locked', () => {
  render(<DocsApp />);
  expect(screen.getByTestId('input-enabled').textContent).toBe('true');
  fireEvent.click(screen.getByText('Roman Imperial Medallion (WKT + Polygons)'));
  expect(screen.getByTestId('input-enabled').textContent).toBe('true');
  fireEvent.click(screen.getByText('Embedded Read-Only View (Light Mode)'));
  expect(screen.getByTestId('input-enabled').textContent).toBe('false');
});
