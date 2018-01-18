import appTypes from './appTypes';

export default {
  onPageLoading: (userData) => ({
    type: appTypes.ON_PAGE_LOADING,
    userData,
  }),
  setSliderImages: (SliderImages)=> ({
    type: appTypes.SET_SLIDER_IMAGES,
    SliderImages,
  }),
}