import { toast } from 'react-toastify'
const defaultOptions = {
  autoClose: 2000,
  hideProgressBar: true
}

type toastTypes = keyof {
  success: string,
  info: string,
  warn: string,
  error: string
}


// types: success, info, warn, error
const toastService = (type:toastTypes, message: 'string', options?: any): any => {
  const toastOptions = !options ? defaultOptions : options
  return toast[type](message, toastOptions)
}

export { toastService }
