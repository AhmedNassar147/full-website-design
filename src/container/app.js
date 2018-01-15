import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';
import { userData } from './data'; 

import appActions from '../container/appActions';
import  Header  from '../components/header';

class App extends React.Component{
  componentWillMount(){
      this.props.onPageloading(userData)
  }
  render(){
    const { user } = this.props;
    return(
      <div>
        <div>
          <Header user={user} />
        </div>
      </div>
    );
  }
};

App.propTypes = {
  onPageloading: PropTypes.func.isRequired,
}

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