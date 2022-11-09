import wrapper from '@/store';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const mockInit = async () => {
    try {
      if (typeof window === 'undefined') {
        const { server } = await import('../components/api/mocks/server'); // node환경일때
        server.listen(); //next에서 node일때 오류있음
      } else {
        const { worker } = await import('../components/api/mocks/worker'); //브라우저 환경
        worker.start();
      }
      // const { worker } = await import('../components/api/mocks/worker'); //브라우저 환경
      // worker.start();
    } catch (e) {
      console.log('e', e);
    }
  };

  useEffect(() => {
    mockInit();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(App);
