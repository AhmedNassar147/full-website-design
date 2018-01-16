import appTypes from './appTypes';
const InitialState = ({
  user: {},
  load: true,
  maxWidth: 0,
});
const appReducer = (state = InitialState, action) => {
  switch (action.type) {
    case appTypes.ON_PAGE_LOADING:
      return state = {
        ...state,
        user: action.userData,
        load: false,
        maxWidth: 1024,
      }
    default:
      return state
  }
};

export default appReducer;