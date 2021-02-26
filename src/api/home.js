import request from '../utils/http/request'

export function getCategory () {
  return request({
    url: 'category',
    method: 'get'
  })
}
