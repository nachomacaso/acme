import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

class Header extends Component {

  // GAH IF I HAD MORE TIME I'D FIX THIS KNOWN ICON MENU BUG
  openMenu() {
    let iconStyle ={"color": "white"};
    return (
        <IconMenu
            iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            iconStyle={iconStyle}
            clickCloseDelay={200}>
            <Link to={{ pathname: '/search', state: { notification: false} }}> 
              <MenuItem primaryText="Acme Inventory"/>
            </Link>
            <Link to="/create">
              <MenuItem primaryText="Create New Acme Item"/>
            </Link>
        </IconMenu>
    );
  }


  render() {
    let titleStyle = {"textAlign": "left"};
    return (
      <AppBar title="Acme Corporation"
              titleStyle={titleStyle}
              iconElementLeft={this.openMenu()}
      />
    );
  }
}

export default Header;