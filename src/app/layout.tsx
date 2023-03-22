import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { Footer } from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Header } from '@/components/Header';
import Providers from '@/components/Providers';
import { getMetadata } from '@/utils/metadata-utils';
import { cn } from '@/utils/style-utils';

export const metadata = getMetadata();

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ko"
      className="scroll-smooth antialiased motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          'min-h-screen bg-white font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-50',
          inter.variable
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="container min-w-[360px] flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
      </body>
    </html>
  );
}

export default RootLayout;
