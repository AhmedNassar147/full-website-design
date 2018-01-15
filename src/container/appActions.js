import appTypes from './appTypes';

export default {
  onPageLoading: (userData) => ({
    type: appTypes.ON_PAGE_LOADING,
    userData,
  }),
}