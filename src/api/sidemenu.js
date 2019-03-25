import request from '@/utils/request'

export function getListStruct() {
  return request({
    url: '/api/services/app/Menu/GetViewStruct',
    method: 'get',
    params: { vType: 0 }
  })
}

export function getEditorStruct() {
  return request({
    url: '/api/services/app/Menu/GetViewStruct',
    method: 'get',
    params: { vType: 1 }
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

export function deleteMenu(data) {
  return request({
    url: '/api/service/app/menu/delete',
    method: 'delete',
    params: { 'id': data.id }
  })
}
