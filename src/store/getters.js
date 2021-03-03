import { isEmpty } from 'lodash'
const getters = {
  isLogged: state => !isEmpty(state.user.token),
  token: state => state.user.token,
  currentUser: state => state.user.currentUser
}

export default getters
