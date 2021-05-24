import request from '@/lib/request'
import * as apis from '@/contants/apis/user'

export const getUser = (params: any) => {
  return request.post(apis.getUser, params)
}
