const TokenKey = 'user_token'

export function getToken () {
  return localStorage.getItem(TokenKey)
}

export function setToken (token) {
  return localStorage.setItem(TokenKey, token)
}

export function setUser (token) {
  return localStorage.setItem(TokenKey, token)
}

export function getUser () {
  return localStorage.getItem('user')
}

export function logout () {
  localStorage.removeItem(TokenKey)
}
