import Layout from '../components/MyLayout.js'
import Shows from '../components/Shows.js'
import Link from 'next/link'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

const Index = props => (
  <div>
    <Layout>
      <Shows/>
    </Layout>
  </div>
)

export default withRedux(initStore)(Index)
