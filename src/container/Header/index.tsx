import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/reducers'

const { Header } = Layout

export default () => {
  const username = useSelector((state: RootState) => state.user.username)

  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="4">{`welcome, ${username}`}</Menu.Item>
        </Menu>
      </Header>
    </>
  )
}
