import React from 'react'
import Script from 'next/script'
import { GA_ID } from '../../lib/gtag'

const Analytics: React.FC = () => {
  return (
    <React.Fragment>
      {GA_ID &&
        <React.Fragment>
          <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga" defer strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "${GA_ID}");
            `}
          </Script>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default Analytics