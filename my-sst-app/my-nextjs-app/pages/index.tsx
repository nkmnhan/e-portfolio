import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import NavBar from '../components/nav-bar'

const Index: NextPageWithLayout = () => {
    return <h1>Tony OK!</h1>
  }

  export default Index

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <NavBar />
      {page}
    </Layout>
  )
}