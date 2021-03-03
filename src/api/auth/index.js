import request from '../../utils/http/request'

export function login (data) {
  return request({
    url: 'auth/login',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: 'auth/logout',
    method: 'post'
  })
}
export function getUser (token) {
  return request({
    url: 'auth/me',
    method: 'post',
    header: {
      Authorization: 'Bearer' + token
    }
  })
}
