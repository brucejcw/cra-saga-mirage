import { Result } from '@/stubs/util'

const route = (server: any) => {
  server.post('getUser', () => Result.Success({ username: 'june' }))
}

export default {
  route,
}
