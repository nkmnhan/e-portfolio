import type { NextPageWithLayout } from './_app'
import Layout from '../components/layout'
import NavBar from '../components/nav-bar'

const ContactPage: NextPageWithLayout = () => {
  return <h1>Contact, Next.js!</h1>
}

export default ContactPage

ContactPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <NavBar />
      {page}
    </Layout>
  )
}