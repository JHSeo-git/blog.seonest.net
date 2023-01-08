import '@/styles/globals.css';

import { Acme, Fira_Mono, PT_Sans } from '@next/font/google';

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

export interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className="scroll-smooth motion-reduce:scroll-auto antialiased">
      <head />
      <body className={`${ptSans.variable} font-sans ${acme.variable} ${firaMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
