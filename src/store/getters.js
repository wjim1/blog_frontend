import { isEmpty } from 'lodash'
import { getToken } from '$utils/auth/auth'

const getters = {
  isLogged: state => !isEmpty(state.user.token),
  token: state => getToken(),
  currentUser: state => state.user.currentUser
}

export default getters
