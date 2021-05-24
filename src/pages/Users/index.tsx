import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'

export default () => {
  const username = useSelector((state: RootState) => state.user.username)
  return (
    <>
      <p>user information: </p>
      <p>
        <strong>name:</strong>
        {username}
      </p>
    </>
  )
}
