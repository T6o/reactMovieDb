import React, { Component } from 'react'

const searchStyle = {
  border: '0',
  position: 'center',
  fontWeight: 'lighter',
  fontSize: '32px',
  marginLeft: 15,
  borderBottom: '1px solid gray',
  marginBottom:30,
  textAlign: 'center'
}

const formStyle = {
  position:'relative',
  textAlign: 'center',
  top:10
}

class ShowAdd extends Component {

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var form = document.forms.findShow;
    this.props.findShows({
      title: form.searchBar.value
    });
  }

  componentDidMount() {
    var form = document.forms.findShow;
  }

  render() {
    return (
      <div style={formStyle}>
        <form  name="findShow" onSubmit={this.handleSubmit}>
          <input style={searchStyle} type="text"  name="searchBar" placeholder="Search Title" />
        </form>
      </div>
    )
  }
}

export default ShowAdd;
