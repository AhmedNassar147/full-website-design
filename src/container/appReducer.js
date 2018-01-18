import appTypes from './appTypes';
const InitialState = ({
  user: {},
  slides: {},
});
const appReducer = (state = InitialState, action) => {
  switch (action.type) {
    case appTypes.ON_PAGE_LOADING:
      return state = {
        ...state,
        user: action.userData,
      };
    case appTypes.SET_SLIDER_IMAGES:
      return state = {
        ...state,
        slides: action.SliderImages,
      }
    default:
      return state
  }
};

export default appReducer;