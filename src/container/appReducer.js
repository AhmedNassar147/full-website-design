import appTypes from './appTypes';
const InitialState = ({
  user: {},
});
const appReducer = (state = InitialState, action) => {
  switch (action.type) {
    case appTypes.ON_PAGE_LOADING:
      return state = {
        ...state,
        user: action.userData,
      };
    default:
      return state
  }
};

export default appReducer;