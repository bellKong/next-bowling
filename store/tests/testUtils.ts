//tests/testUtils.ts
import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render as rtlRender } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { AppStore, RootState, setupStore } from './store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const render = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  //   function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
  //     return <Provider>{children}</Provider>;
  //   }

  return { store, ...rtlRender(ui, { ...renderOptions }) };
};

export * from '@testing-library/react';
export { render };
