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
    width: '50%',
    height:'80%',
    marginTop: '10%',
    justifyContent: 'space-around',
    border: '5px solid  #e0ebeb'
  },
  gridList: {
    flexWrap: 'nowrap',
    overflowX: 'auto',
    height:'400px'
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
        <GridTile style={{border:'5px solid white',width:'300px', height:'400px', marginRight:'5px'}}
          title={shows.title}>
          <img  style={{width:'200px', height:'400px'}} src={shows.url}/>
        </GridTile>
      </Link>
    ));

    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {items}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = ({ shows }) => ({ shows })

export default connect(mapStateToProps)(ReadShows)
