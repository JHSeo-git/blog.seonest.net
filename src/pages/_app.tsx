import type { AppProps } from 'next/app';
import Head from 'next/head';

import { DefaultSEO } from '@/components/_seo';
import GlobalStyle from '@/components/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <DefaultSEO />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
