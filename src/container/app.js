import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress, FlatButton } from 'material-ui';
import { userData } from './data'; 

import appActions from '../container/appActions';
import  Header  from '../components/header';

class App extends React.Component{
  componentWillMount(){
      this.props.onPageloading(userData)
  }
  render(){
    const { user, maxWidth } = this.props;
    return(
      <div>
        <div>
          <Header user={user} compStyle={maxWidth} />
        </div>
      </div>
    );
  }
};

App.propTypes = {
  onPageloading: PropTypes.func.isRequired,
  load: PropTypes.bool,
  user: PropTypes.array,
  maxWidth: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    load: state.load,
    maxWidth: state.maxWidth,
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