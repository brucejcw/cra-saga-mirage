import { useEffect, useRef, useState } from 'react'
import { message } from 'antd'

export interface Response {
  success?: boolean
  [key: string]: any
}

interface Options {
  showGlobalLoading?: boolean
  manual?: boolean
  onSuccess?(data: any, args: any[]): void
  onError?(error: any): void
}

const defaultOptions = {
  showGlobalLoading: true,
  manual: false,
}

const showErrorToast = (errorMessage: string) => {
  message.error(errorMessage)
}

export default (func: Function, options?: Options) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>(null)
  const funcRef = useRef(func)
  funcRef.current = func

  const _options = { ...defaultOptions, ...options }

  useEffect(() => {
    if (!_options.manual) {
      run()
    }
  }, [])

  const handleError = (e: any) => {
    showErrorToast(e.message || e.errorMessage || 'system error') // todo i18n
    setError(e)
    if (options?.onError) {
      options.onError(e)
    }
  }

  const run = async (...args: any) => {
    setError(null)
    setLoading(true)

    try {
      const res: Response = await funcRef.current(...args)
      const { success, data } = res
      if (success) {
        setData(data)
        if (options?.onSuccess) {
          options.onSuccess(data, args)
        }
      } else {
        handleError(res)
      }
    } catch (e) {
      handleError(e)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    data,
    error,
    run,
  }
}
