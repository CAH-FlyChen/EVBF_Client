import request from '@/utils/request'

export function getStruct() {
  return request({
    url: '/api/services/app/Menu/GetViewStruct',
    method: 'get'
  })
}

export function fetchList(query) {
  return request({
    url: '/api/services/app/menu/getall',
    method: 'get',
    params: query
  })
}

export function fetchMenu(id) {
  return request({
    url: '/api/services/app/menu/detail',
    method: 'get',
    params: { id }
  })
}

export function createMenu(data) {
  return request({
    url: '/api/services/app/menu/create',
    method: 'post',
    data
  })
}

export function updateMenu(data) {
  return request({
    url: '/api/serivces/app/menu/update',
    method: 'post',
    data
  })
}
