import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap&"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content=" Frontend Developer with +4 years of experience developing web applications."
          />
          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="Mahdi" />
          <meta
            itemProp="description"
            content=" Frontend Developer with +4 years of experience developing web applications."
          />
          <meta
            itemProp="image"
            content="https://mahdi.codes/images/avatars/mahdi.jpg"
          />
          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://mahdi.codes" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mahdi" />
          <meta
            property="og:description"
            content=" Frontend Developer with +4 years of experience developing web applications."
          />
          <meta
            property="og:image"
            content="https://mahdi.codes/images/avatars/mahdi.jpg"
          />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mahdi" />
          <meta
            name="twitter:description"
            content=" Frontend Developer with +4 years of experience developing web applications."
          />
          <meta
            name="twitter:image"
            content="https://mahdi.codes/images/avatars/mahdi.jpg"
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
