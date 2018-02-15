import Layout from '../components/MyLayout.js'
import AddShow from '../components/AddShow.js'
import fetch from 'isomorphic-unfetch'
import { bindActionCreators } from 'redux'
import { initStore, addShow } from '../store'
import withRedux from 'next-redux-wrapper'

const showStyle = {
  textAlign: 'center',
}

const imgStyle = {
  border: '3px solid green',
  padding: '50px',
  float: 'right',
}

const divCenter = {
  margin: 'auto',
  width: '80%',
  padding: '10px',
  textAlign: 'center',
}

const divCenter2 = {
  margin: 'auto',
  width: '200px',
  padding: '10px'
}

const textStyle = {
  border: '3px solid green',
  padding: '10px',
  float: 'left',
  width: '50%',
}

class Post extends React.Component {

  constructor(props) {
    super(props);
  }

 render() {
   let url = 'http://image.tmdb.org/t/p/w185//'+this.props.show.poster_path;
   if(this.props.show.poster_path == null){
     url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
   }
    return (
      <Layout>
          <div style={divCenter2}>
            <img style={{marginTop:'100px'}} src={url}/>
          </div>
          <div style={divCenter}>
            <h1>{this.props.show.title}</h1>
            <p>{this.props.show.overview}</p>
            <AddShow id = {this.props.show.id} title ={this.props.show.title} url = {url}/>
          </div>
      </Layout>
    );
  }
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3151edfc05030ee1cc38ce098648f315`)
  const show = await res.json()
  console.log(`Fetched show: ${show.name}`)
  return { show }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShow: bindActionCreators(addShow, dispatch),
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Post)
