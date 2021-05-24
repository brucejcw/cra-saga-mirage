import * as userAction from '@/redux/actions/user'

export interface User {
  username: string
}

export const initialStates = {
  username: '',
}

export default (state: User = initialStates, action: any): User => {
  switch (action.type) {
    case userAction.setUser:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}
