import request from '../utils/http/request'

export function getCategory () {
  return request({
    url: 'category',
    method: 'get'
  })
}

export function getArticles (params) {
  return request({
    url: 'articles',
    method: 'get',
    params
  })
}
