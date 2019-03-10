export default {

  state: {
    user: '',
    firstSignIn: true
  },
  setAuthorisedAction(user) {
    if (!user) return false
    this.state.user = { email: user.email };
  },
  clearAuthorisedAction() {
    this.state.user = '';
  }
}
