import request from '../request'
import urls from './urls'

const header = {}

function todo(params){
    // return一个promise
    // 根据需要可在header中添加token等
    return request.get(urls.todo, params, header)
}

export default {todo}