import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';

import { userData, SliderImages, products } from './data';

import appActions from '../container/appActions';
import  Header  from '../components/header';
import Products from '../components/products/index';
import Carousel from '../components/carousel/index';
import { backgroundImage, loading, aboutSec } from './appStyle';
class App extends React.Component{
  componentWillMount(){
      setTimeout(() => this.props.onPageloading(userData) ,3000);
  };
  
  render(){
    const { user } = this.props;
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
            <Products products={products} />
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