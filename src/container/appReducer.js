import appTypes from './appTypes';
const InitialState = ({
  user: {},
  load: true,
});
const appReducer = (state = InitialState, action) => {
  switch (action.type) {
    case appTypes.ON_PAGE_LOADING:
      return state = {
        ...state,
        user: action.userData,
        load: false,
      }
    default:
      return state
  }
};

export default appReducer;