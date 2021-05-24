import { createServer } from 'miragejs'
import { combineRoutes, runAllSeeds } from '@/stubs/util'
import todo from '@/stubs/objects/todo'
import user from '@/stubs/objects/user'

export function makeServer({ environment = 'testing' }) {
  return createServer({
    environment,

    factories: {
      todo: todo.factory,
    },

    models: {
      todo: todo.model,
    },

    routes() {
      this.namespace = 'api'
      combineRoutes(this, todo, user)
    },

    seeds(server) {
      runAllSeeds(server, todo)
    },
  })
}
