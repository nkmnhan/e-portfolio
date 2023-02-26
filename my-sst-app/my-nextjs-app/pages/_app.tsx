import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { ThemeProvider } from 'next-themes'
import NavBar from '@/components/nav-bar'
import Layout from '@/components/layout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>)
}
