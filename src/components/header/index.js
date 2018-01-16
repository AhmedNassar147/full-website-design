import React from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { 
  AppBar,
  Avatar,
  ListItem,
 } from 'material-ui';

class Header extends React.Component {
  state = {
    displayValue: 'none',
  }
  render(){
    const { user, maxWidth } = this.props;
    const { display } = this.state;
    return(
      <div>
        <AppBar
          title="Site"
          iconStyleRight={{ margin: 'auto 0px' }}
          iconElementRight={
            <span>
              {!(user && user.length > 0) ? null : (
                  <span>
                    {user.map((usrData) => (
                      <span key={usrData.id}>
                        <ListItem
                          primaryText={usrData.name}
                          leftAvatar={<Avatar src={usrData.image} />}
                        />
                        </span>
                    ))}
                  </span>
                )
              }
          </span>
          }
        />
      </div>
    );
  }
};

export default Header;