import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    'userNameOrEmailAddress': username,
    'password': password
  }
  console.log(data)
  return request({
    url: '/api/TokenAuth/Authenticate',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(id) {
  return request({
    url: '/api/services/app/User/Get',
    method: 'get',
    params: { id }
  })
}

