import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="eng-US">
        <Head> </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}