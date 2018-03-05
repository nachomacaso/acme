import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { triggerMenu: true };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    console.log('hey');
    this.setState({ triggerMenu: false });
  }

  openMenu() {
    console.log(this.state.triggerMenu);
    return (
        <IconMenu
            iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}>
            <Link to="/search">
              <MenuItem primaryText="Acme Inventory" onCLick={this.handleMenu}/>
            </Link>
            <Link to="/create">
              <MenuItem primaryText="Create New Acme Item"  onCLick={this.handleMenu}/>
            </Link>
        </IconMenu>
    );
  }


  render() {
    return (
      <AppBar title="Acme"
              iconElementLeft={this.openMenu()}
      />
    );
  }
}

export default Header;