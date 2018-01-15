import React from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { 
  AppBar,
  Avatar,
  IconMenu,
  MenuItem,
  IconButton,
 } from 'material-ui';

const Header = (props) => {
  return(
    <div>
      <AppBar 
        title="Site"
        iconElementRight={
          <div>
            <Avatar style={{ margin: 'auto' }} />
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem
                primaryText="SignOut"
              />
            </IconMenu>
          </div>
        }
      />
    </div>
  );
};

export default Header;