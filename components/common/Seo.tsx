import Head from 'next/head'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Head>
      <title>Color Converter - Moyotsukai</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="Color converter made by Moyotsukai" />
      <meta property="og:url" content="https://color.moyotsukai.dev" />
      <meta property="og:title" content="Color Converter - Moyotsukai" />
      <meta property="og:description" content="Color converter made by Moyotsukai" />
      <meta property="og:image" content="https://color.moyotsukai.dev/ogimage_large.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Color Converter - Moyotsukai" />
      <meta name="twitter:image" content="https://color.moyotsukai.dev/ogimage_large.png" />
      <meta name="theme-color" content="#fff" />
    </Head>
  )
}

export default Footer