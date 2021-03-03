import request from '../../utils/http/request'

export function login (data) {
  return request({
    url: 'auth/login',
    method: 'post',
    data
  })
}

export function logout (token) {
  return request({
    url: 'auth/logout',
    method: 'post',
    header: {
      Authorization: 'Bearer' + token
    }
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
