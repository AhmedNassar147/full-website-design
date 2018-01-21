import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';

import { userData, SliderImages, products } from './data';

import appActions from '../container/appActions';
import  Header  from '../components/header';
import Products from '../components/products/index';
import Carousel from '../components/carousel/index';
import { loading, productStyles } from './appStyle';
class App extends React.Component{
  componentWillMount(){
      setTimeout(() => this.props.onPageloading(userData) ,3000);
  };
  
  render(){
    const { user, open, handleRequestOpen, handleRequestClose } = this.props;
    return(
      <div>
        {!user ? (
          <div style={loading}>
            <CircularProgress thickness={8} size={80} />
            <h3>Loading....</h3>
          </div>
        ) : (
          <div>
            <Header user={user} />
            <Carousel SliderImages={SliderImages} />
            <Products
              products={products}
              productStyles={productStyles}
              open={open}
              handleRequestClose={handleRequestClose}
              handleRequestOpen={handleRequestOpen}
            />
          </div>
        )}
      </div>
    );
  }
};

App.propTypes = {
  onPageloading: PropTypes.func.isRequired,
  user: PropTypes.array,
  open: PropTypes.bool,
  handleRequestOpen: PropTypes.func.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    open: state.open,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageloading: (userData) => {
      dispatch(appActions.onPageLoading(userData))
    },
    handleRequestOpen: () => {
      dispatch(appActions.handleSnackbarOpen())
    },
    handleRequestClose: () => {
      dispatch(appActions.handleSnackbarClose())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);