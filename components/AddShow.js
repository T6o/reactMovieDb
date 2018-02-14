import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addShow } from '../store'
import RaisedButton from 'material-ui/RaisedButton';

const styleB = {
  margin: 'auto',
  width: '50%',
  padding: '10px'
}

class AddShow extends Component {
  add = () => {
    var p = { id: this.props.id, title: this.props.title, url: this.props.url};
    this.props.addShow(p)
  }

  render () {
    return (
      <div style={styleB}>
        <RaisedButton onClick={this.add} label="Save"/>
      </div>
    )
  }
}

const mapStateToProps = ({ shows }) => ({ shows })

const mapDispatchToProps = (dispatch) => {
  return {
    addShow: bindActionCreators(addShow, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddShow)
