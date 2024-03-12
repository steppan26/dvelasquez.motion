import { Html, Head, Main, NextScript } from 'next/document'
import favicon from '../Assets/favicon.png'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
        <link rel='icon' href={favicon.src} />
        <link rel="stylesheet" href="https://use.typekit.net/ojg6bke.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
