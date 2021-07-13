export default {
  displayWebsite(state, website) {
    state.datas = website;
  },

  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  updateCurrent(state, current) {
    state.current = current;
  }
}