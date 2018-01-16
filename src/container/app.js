import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress, Paper } from 'material-ui';
import { userData } from './data'; 
import appActions from '../container/appActions';
import  Header  from '../components/header';
import { backgroundImage } from './appStyle';
class App extends React.Component{
  componentWillMount(){
      setTimeout(() => this.props.onPageloading(userData) ,3000);
  };
  
  render(){
    const { user } = this.props;
    return(
      <div>
        {!user ? (
          <div style={{ paddingTop: '10%', textAlign: 'center' }}>
            <CircularProgress thickness={8} size={80} />
            <h3>Loading....</h3>
          </div>
        ) : (
          <div>
            <Header
              user={user}
            />
            <Paper style={backgroundImage}>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
              <p>asdasdasdas</p>
            </Paper>
          </div>
        )}
      </div>
    );
  }
};

App.propTypes = {
  onPageloading: PropTypes.func.isRequired,
  user: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageloading: (userData) => {
      dispatch(appActions.onPageLoading(userData))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);