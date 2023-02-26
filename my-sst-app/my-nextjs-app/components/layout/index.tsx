import Head from 'next/head'
import NavBar from '../nav-bar'
type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <NavBar></NavBar>
      <main><div className="bg-white dark:bg-black">{children}</div></main>
    </>
  )
}