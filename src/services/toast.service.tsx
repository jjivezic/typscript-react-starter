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
type toastTypes2 = keyof {
  [key: string]: string
}
type OptionsFlags<Type> = {
  [Property in keyof Type]: string;
};

// types: success, info, warn, error
const toastService = (type:string, message: 'string', options?: any): any => {
  const toastOptions = !options ? defaultOptions : options
  return toast[type](message, toastOptions)
}

export { toastService }
