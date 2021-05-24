import React, { useState } from 'react'
import { Card, Input, List } from 'antd'
import TodoItem from './TodoItem'
import * as todoService from '@/services/todoService'
import { Todo } from '@/types/common'
import useRequest from '@/lib/useRequest'

export default () => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading } = useRequest(todoService.getTodoList, {
    onSuccess(data) {
      setTodoList(data)
    },
  })

  const { run: updateTodoRequest } = useRequest((newItem: Todo) => todoService.updateTodo(newItem), {
    manual: true,
    onSuccess(data: any, args: any[]) {
      const newItem = args[0]
      const newTasks = todoList.map(todo => {
        return todo.id === newItem.id ? newItem : todo
      })
      setTodoList(newTasks)
    },
  })

  const { run: addTodoRequest } = useRequest((newItem: Todo) => todoService.addTodo(newItem), {
    manual: true,
    onSuccess(data) {
      setTodoList(todoList.concat([data]))
    },
  })

  const onChange = async (item: Todo) => {
    const newItem = { ...item, checked: !item.checked }
    await updateTodoRequest(newItem)
  }

  const onEnter = async (e: any) => {
    const newItem = {
      text: e.target.value,
      checked: false,
    }
    await addTodoRequest(newItem)
  }

  return (
    <Card>
      <Input placeholder={'add todo...'} onPressEnter={onEnter} />
      <List
        bordered
        dataSource={todoList}
        renderItem={(item: any) => (
          <List.Item>
            <TodoItem item={item} onChange={onChange} />
          </List.Item>
        )}
      />
    </Card>
  )
}
