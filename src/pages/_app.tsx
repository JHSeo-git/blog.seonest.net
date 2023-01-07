import '@/styles/globals.css';

import { Acme, Fira_Mono, PT_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { DefaultSEO } from '@/components/_seo';

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});

const acme = Acme({
  subsets: ['latin'],
  variable: '--font-acme',
  weight: ['400'],
});

const firaMono = Fira_Mono({
  subsets: ['latin'],
  variable: '--font-fira-mono',
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <DefaultSEO />
      {/* <GlobalStyle /> */}
      <div className={`${ptSans.variable} font-sans ${acme.variable} ${firaMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
