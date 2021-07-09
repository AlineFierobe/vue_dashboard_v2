export default {
  isLoading: state => state.user.isLoading,
  isLoggedIn: state => state.user.isLoggedIn,
  errors: state => state.user.errors,
  currentUser: state => state.user.user,
  jwtToken: state => state.user.jwtToken
}