'use client';

import { ThemeProvider } from '@wits/next-themes';

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Providers;
