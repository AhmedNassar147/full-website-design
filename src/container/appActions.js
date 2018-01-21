import appTypes from './appTypes';

export default {
  onPageLoading: (userData) => ({
    type: appTypes.ON_PAGE_LOADING,
    userData,
  }),
  handleSnackbarOpen: () => ({
    type: appTypes.HANDLE_SNAKBAR_OPEN,
  }),
  handleSnackbarClose: () => ({
    type: appTypes.HANDLE_SNAKBAR_CLOSE,
  }),
}