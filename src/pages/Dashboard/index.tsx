import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TodoList from '@/container/TodoList'
import * as userAction from '@/redux/actions/user'

function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: userAction.getUser })
  }, [])

  return (
    <>
      <TodoList />
    </>
  )
}

export default Index
