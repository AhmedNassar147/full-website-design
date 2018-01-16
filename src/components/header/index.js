import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  TextField,
  ListItem,
  Avatar,
  IconMenu,
  MenuItem,
  IconButton,
  Drawer,
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      open: false,
    };
  }
  handleCloseDrawer = () => {
    this.setState({ open: false })
  };
  handleOpenDrawer = () => {
    this.setState({ open: true })
  };
  render(){
    const { user } = this.props;
    const { open } = this.state;
    return(
      <nav>
        <AppBar
          title="Site Logo"
          onLeftIconButtonClick={this.handleOpenDrawer}
          iconElementRight={
            <span style={{ display: 'flex' }}>
                {(user && user.length > 0) ? (
                    <span style={{ flex: 1, paddingTop: '5px' }}>
                      {user.map((usrData) => (
                        <span key={usrData.id}>
                          <Avatar src={usrData.image} />
                        </span>
                      ))}
                    </span>
                  ) : null
                }
                <span style={{ flex: 1 }}>
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                  >
                    <MenuItem
                      primaryText="SignOut"
                    />
                  </IconMenu>
                </span>
            </span>
          }
        />
        <Drawer
          open={open}
          docked={false}
          onRequestChange={this.handleCloseDrawer}
        />
      </nav>
    );
  }
};

export default Header;