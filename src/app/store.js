import { createStore } from 'redux';
import appReducer from '../container/appReducer';

export default createStore(appReducer, {});