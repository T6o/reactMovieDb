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
import {Tabs, Tab} from 'material-ui'
import { Container } from 'reactstrap'
import NavBar from './NavBar'


/*
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
*/

import Navbar from 'react-bootstrap/lib/Navbar';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';

try { injectTapEventPlugin(); } catch (e) {  }
const muiTheme = getMuiTheme({ userAgent: false });
const Logo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

const linkStyle = {
  marginTop: 20,
  marginRight: 15,
  marginLeft: 15,
  textDecoration: 'none',
  color:'white',
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

const toolbar = {
  position: 'absolute',
  left:50,
  top:2
}

class Header extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
        </Head>
        <header>
          <NavBar />
        </header>
        <footer>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossOrigin="anonymous" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossOrigin="anonymous" />
        </footer>
      </div>

    );
  }
}

export default Header
