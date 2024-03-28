import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Logo from '/public/social_brand_logo.png'

export default function Document() {
  const gtmKey = process.env.NEXT_PUBLIC_GTM_KEY

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ojg6bke.css" />

        <meta name="description" content="Portfolio website of motion design Daniela Velasquez." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="motion, design, brand, designer, motion design, brand design" />

        {/* Social Media Tags */}
        <meta property="og:title" content="D.Velasquez Motion" />
        <meta property="og:description" content="Daniela Velasquez, motion and brand designer extraordinaire. Let's bring your brand to life together." />
        <meta property="og:image" content={Logo.src} />
        <meta property="twitter:title" content="D.Velasquez Motion" />
        <meta property="twitter:description" content="Daniela Velasquez, motion and brand designer extraordinaire. Let's bring your brand to life together." />
        <meta property="twitter:image" content={Logo.src} />
        {/* End of social Media Tags */}

        {/* Google Tag Manager */}
          <Script
          id="googleTagManager"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmKey}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={"https://www.googletagmanager.com/ns.html?id=" + gtmKey}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        {/* END of Google Tag Manager */}
      </Head>
      <body>
        <SpeedInsights />
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
