import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

declare global {
  interface Window { Calendly: any; }
}

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
        <meta property="og:image" content="https://res.cloudinary.com/dtlyxry6z/image/upload/v1711648224/Home/social_brand_logo_p7e9dw.png" />
        <meta property="twitter:title" content="D.Velasquez Motion" />
        <meta property="twitter:description" content="Daniela Velasquez, motion and brand designer extraordinaire. Let's bring your brand to life together." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dtlyxry6z/image/upload/v1711648224/Home/social_brand_logo_p7e9dw.png" />
        {/* End of social Media Tags */}

        {/* <!-- Calendly --> */}
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        {/* <!-- End of Calendly --> */}

        <link href="https://vjs.zencdn.net/8.10.0/video-js.css" rel="stylesheet" />
        <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js" defer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
