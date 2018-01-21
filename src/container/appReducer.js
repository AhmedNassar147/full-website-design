import appTypes from './appTypes';
const InitialState = ({
  user: {},
  open: false,
});
const appReducer = (state = InitialState, action) => {
  switch (action.type) {
    case appTypes.ON_PAGE_LOADING:
      return state = {
        ...state,
        user: action.userData,
        open: false,
      };
    case appTypes.HANDLE_SNAKBAR_OPEN:
      return state = {
        ...state,
        open: true,
      };
    case appTypes.HANDLE_SNAKBAR_CLOSE:
      return state = {
        ...state,
        open: false,
      };
    default:
      return state
  }
};

export default appReducer;