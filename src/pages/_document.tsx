import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { GA_ID } from '../lib/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
          <meta name="theme-color" content="#fff" />
          {GA_ID &&
            <React.Fragment>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() { dataLayer.push(arguments); }
                  gtag("js", new Date());
                  gtag("config", "${GA_ID}");
                `
              }} />
            </React.Fragment>
          }
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