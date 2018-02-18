import Header from './Header'
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';

function Layout(props){
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          {props.children}
        </div>
      </MuiThemeProvider>
    );
}

export default Layout
