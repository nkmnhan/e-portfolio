import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import NavBar from '../components/nav-bar'

const AboutPage: NextPageWithLayout = () => {
  return <h1>About, Next.js!</h1>
}

export default AboutPage

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <NavBar />
      {page}
    </Layout>
  )
}