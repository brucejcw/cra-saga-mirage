import request from '@/lib/request'
import * as apis from '@/contants/apis/todo'

export const addTodo = (params: any) => {
  return request.post(apis.addTodo, params)
}

export const getTodoList = (params: any) => {
  return request.post(apis.getTodoList, params)
}

export const updateTodo = (params: any) => {
  return request.post(apis.updateTodo, params)
}
