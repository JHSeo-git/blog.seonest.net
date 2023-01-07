import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="ko"
        className="scroll-smooth hover:scroll-auto motion-reduce:scroll-auto antialiased"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
