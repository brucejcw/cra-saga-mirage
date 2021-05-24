import { call, put, takeLatest } from 'redux-saga/effects'
import * as userService from '@/services/userService'
import * as userAction from '@/redux/actions/user'

function* getUser(action: any) {
  const { success, data } = yield call(userService.getUser, action)
  if (success) {
    yield put({ type: userAction.setUser, data })
  }
}

function* saga() {
  yield takeLatest(userAction.getUser, getUser)
}

export default saga
