import React, {Component}  from 'react'
import ShowTable from '../components/ShowTable.js'
import ShowAdd from '../components/ShowAdd.js'
import Link from 'next/link'
import 'isomorphic-fetch'

class Shows extends Component {

  constructor() {
    super();
    this.state = { showsM : []};
    this.findShows = this.findShows.bind(this);
  }

  componentDidMount() {
    const show = { title: 'Interstellar'};
    this.findShows(show);
  }

  findShows(show) {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=3151edfc05030ee1cc38ce098648f315&query='+show.title)
    .then(response => response.json())
    .then(response => {
      if(response.results != null){
        this.setState({ showsM: response.results });
        showsM: response.result;
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div style={{marginTop: '100px'}} className="App">
        <ShowAdd findShows = {this.findShows}/>
        <ShowTable className="App-header" shows={this.state.showsM}/>
      </div>
    )
  }
}

export default Shows
