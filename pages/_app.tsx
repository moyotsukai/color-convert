import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import { usePageView } from '../hooks/usePageView'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  usePageView()

  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
