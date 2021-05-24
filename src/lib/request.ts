import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const BASE_PATH = ''

const request = axios.create({
  baseURL: BASE_PATH,
  withCredentials: true,
})

const handleResponse = (response: AxiosResponse) => {
  return response.data
}

const handleResponseError = (error: AxiosError) => {
  return Promise.reject(error?.response?.data)
}

const handleRequest = (config: AxiosRequestConfig) => {
  // config.headers
  return config
}

request.interceptors.request.use(handleRequest)

request.interceptors.response.use(handleResponse, handleResponseError)

export default request
