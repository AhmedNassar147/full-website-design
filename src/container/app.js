import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CircularProgress,
  FlatButton,
  TextField,
  ListItem,
  Avatar,
  IconMenu,
  MenuItem,
  IconButton,
 } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { userData } from './data'; 

import appActions from '../container/appActions';
import  Header  from '../components/header';
import {  } from 'material-ui/List';

class App extends React.Component{
  componentWillMount(){
      this.props.onPageloading(userData)
  }
  render(){
    const { user } = this.props;
    return(
      <div>
        <div>
          <Header>
            <TextField name="search" />
            <span style={{ margin: 'auto' }}>
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
            <IconMenu
              style={{ margin: 'auto' }}
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem
                primaryText="SignOut"
              />
            </IconMenu>
          </Header>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  onPageloading: PropTypes.func.isRequired,
  load: PropTypes.bool,
  user: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    load: state.load,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageloading: (userData) => {
      dispatch(appActions.onPageLoading(userData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);