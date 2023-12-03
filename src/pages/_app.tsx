import { Navbar } from '@/Components'
import { Stores } from '@/Utils/stores'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Stores>
      <Navbar navbarData={pageProps?.navbarData} />
      <Component {...pageProps} />
    </Stores>
  )
}
