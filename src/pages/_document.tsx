import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500&family=Oswald:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`dark-theme`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
