import '@/styles/globals.css';

import { PT_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { DefaultSEO } from '@/components/_seo';
import GlobalStyle from '@/components/GlobalStyle';

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <DefaultSEO />
      <GlobalStyle />
      <div className={`${ptSans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
