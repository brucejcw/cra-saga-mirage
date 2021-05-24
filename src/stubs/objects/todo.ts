import { Factory, Model } from 'miragejs'
import { Todo } from '@/types/common'
import faker from 'faker'
import { Result } from '@/stubs/util'

const factory = Factory.extend({
  text() {
    return faker.internet.domainName()
  },
  checked() {
    return faker.datatype.boolean()
  },
})

const model = Model.extend<Partial<Todo>>({})

const route = (server: any) => {
  server.post('getTodoList', (schema: any) => Result.Success(schema.all('todo').models))

  server.post('updateTodo', (schema: any, request: any) => {
    const attrs = JSON.parse(request.requestBody)
    const todo = schema.find('todo', attrs.id) as any
    return Result.Success(todo.update(attrs))
  })

  server.post('addTodo', (schema: any, request: any) => {
    let attrs = JSON.parse(request.requestBody)
    return Result.Success(schema.create('todo', attrs))
  })
}

const seed = (server: any) => {
  server.createList('todo', 4)
}

export default {
  factory,
  model,
  seed,
  route,
}
