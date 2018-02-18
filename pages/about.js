import Layout from '../components/MyLayout.js'
import ReadShows from '../components/ReadShows.js'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import { initStore, addShow } from '../store'
import withRedux from 'next-redux-wrapper'

const About = props => (
  <Layout>
    <ReadShows />
  </Layout>
)

const mapDispatchToProps = (dispatch) => {
  return {
    addShow: bindActionCreators(addShow, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(About)
