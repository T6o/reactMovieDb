import Link from 'next/link';
import React, {Component} from 'react';
import Head                 from 'next/head';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import AppBar               from 'material-ui/AppBar';
import FlatButton           from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

try { injectTapEventPlugin(); } catch (e) {  }
const muiTheme = getMuiTheme({ userAgent: false });
const Logo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

const linkStyle = {
  marginRight: 15,
  marginLeft: 15,
  textDecoration: 'none',
  color:'#33cc33',
  fontSize: '20px',
  fontFamily: 'Source Sans Pro, Arial, sans-serif'
}

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const TStyle = {
  position: 'relative ',
  height: 100,
  top:40,
  //float:'left'
}

const TCStyle = {
}

const logo = {
  position: 'relative',
  width:'100px',
  float:'right',
  right:'5%',
  top: 7
}

const left = {
  position: 'relative ',
  background:'#e6f2ff',
}

const link = {
  position: 'absolute',
  left:'20%'
}

class Header extends Component {
  render() {
    return (
      <div style={left}>
        <div style={logo}>  <img  src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"/></div>
        <div style={TStyle}>
          <div style={link}>
            <Link href="/">
              <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
              <a style={linkStyle}>My Shows</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
