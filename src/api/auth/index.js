import request from '../../utils/http/request'

export function login (data) {
  return request({
    url: 'auth/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: 'auth/register',
    method: 'post',
    data
  })
}

export function checkUserExists(data){
  return request({
    url: 'user/exists',
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
export function getUser () {
  return request({
    url: 'auth/me',
    method: 'post'
  })
}
