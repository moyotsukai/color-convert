import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
