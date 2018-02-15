import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addShow } from '../store'
import {List, ListItem} from 'material-ui/List'
import Link from 'next/link'
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    margin: 'auto',
    padding:'10px',
    display: 'flex',
    flexWrap: 'wrap',
    width: '40%',
    marginTop: '10%',
    background: '#cdd0d6',
    justifyContent: 'space-around',
    border: '5px solid  #e0ebeb'
  },
  rootT: {
    margin: 'auto',
    padding:'10px',
    textAlign:'center',
    width: '40%',
    justifyContent: 'space-around',
  },
  gridList: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    height:'480px'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

class ReadShows extends Component {
  render () {
    let shows = this.props.shows;

    const items = shows.map((shows, i) => (
      shows = JSON.parse(shows),
      <Link key={i} as={`/p/${shows.id}`} href={`/post?id=${shows.id}`}>
        <ListItem style={{}}>
          <img  style={{width:'300px'}} src={shows.url}/>
        </ListItem>
      </Link>
    ));

    return (
      <div>
        <div style={styles.root}>
          <List style={styles.gridList} cols={2.2}>
            {items}
          </List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ shows }) => ({ shows })

export default connect(mapStateToProps)(ReadShows)
