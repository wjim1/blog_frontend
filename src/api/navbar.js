import request from '../utils/http/request'

export function getNavbar () {
  return request({
    url: 'test',
    method: 'get'
  })
}
