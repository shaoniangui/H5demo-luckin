import request from '../request'

const header = {}

export default {
  user(params) {
    // return一个promise
    // 根据需要可在header中添加token等
    return request.get('/api/user', params, header)
  }
}