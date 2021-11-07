import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="antialiased font-sans bg-white text-gray-800 transition-colors">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument