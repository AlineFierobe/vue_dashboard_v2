export default {
  isLoading: state => state.isLoading,
  isLoggedIn: state => state.isLoggedIn,
  errors: state => state.errors,
  currentUser: state => state.user,
  jwtToken: state => state.jwtToken
}