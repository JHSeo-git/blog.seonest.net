'use client';

import Script from 'next/script';

function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0SH8SYHS4F"
      />
      <Script
        id="google-analytics-runner"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0SH8SYHS4F');
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
