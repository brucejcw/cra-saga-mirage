import { makeServer } from '@/stubs'

const environment = process.env.NODE_ENV

if (environment === 'development') {
  makeServer({ environment })
}
