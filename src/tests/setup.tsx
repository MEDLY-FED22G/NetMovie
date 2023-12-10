import { MantineProvider } from '@mantine/core';
import '@testing-library/jest-dom/vitest';
import { RenderOptions, cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { afterEach, beforeAll, vi } from 'vitest';
import { MovieProvider } from '../components/MovieContext';

// Före alla tester, simulera window.matchMedia-funktionen för att undvika fel vid körning av tester
beforeAll(() => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
});

// Definiera en anpassad render-funktion som omsluter komponenten med nödvändiga context-leverantörer
export const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(
    <Router>
      <MantineProvider>
        <MovieProvider>{ui}</MovieProvider>
      </MantineProvider>
    </Router>,
    options,
  );

afterEach(() => {
  cleanup();
});
