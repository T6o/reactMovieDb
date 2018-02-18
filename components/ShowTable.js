import React, { Component } from 'react'
import ShowRow from '../components/ShowRow'

import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table';

const divCenter = {
  margin: 'auto',
  width: '50%',
  border: '0.5px solid #e0ebeb',
  padding: '10px',
  textAlign: 'center',
  height: '10%',
  background: '#e0ebeb'

}
class ShowTable extends Component {
  render() {

    const showRows = this.props.shows.map(show => <ShowRow key={show.id} show={show} />);
    return(
      <div style={divCenter}>
        <Table style={{ width: '100%' }}>
          <TableHeader displaySelectAll={false}>
          </TableHeader>
          <TableBody>{showRows}</TableBody>
        </Table>
      </div>
   )
  }
}


export default ShowTable;
