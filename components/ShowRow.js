import React, { Component } from 'react'
import Link from 'next/link'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


class ShowRow extends Component {
  render() {
    const show = this.props.show;

    return (
      <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        <TableRow style={{ textAlign:'center', width: '50px' ,border: '1px'}}>
            <TableRowColumn><img style={{width: '20px'}}src = {"http://image.tmdb.org/t/p/w185//"+show.poster_path} /></TableRowColumn>
            <TableRowColumn>{show.title}</TableRowColumn>
            <TableRowColumn>{show.release_date}</TableRowColumn>

        </TableRow>
      </Link>
    )
  }
}
export default ShowRow;
