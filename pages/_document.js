import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="el">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=GFS+Neohellenic&display=swap"
            rel="stylesheet"
          />
          <link href="/favicon.ico" rel="shortcut icon" />
          <meta name="theme-color" content="#272D2D" />
          <meta
            name="google-site-verification"
            content="urJ3emJOxOwYJiDZAeEguHShYRqdbUVrJXwxIfp2r1k"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
