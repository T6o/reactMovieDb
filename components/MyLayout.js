import Header from './Header'
import React, {Component} from 'react'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';

try { injectTapEventPlugin(); } catch (e) {  }
const muiTheme = getMuiTheme({ userAgent: false });


class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Layout
