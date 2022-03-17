import Document, { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/common/Analytics'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
          <meta name="theme-color" content="#fff" />
          <Analytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument