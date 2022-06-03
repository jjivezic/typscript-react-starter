import React, { useState } from 'react'
import { useAppDispatch,useAppSelector } from 'store/hook'
import { login } from 'store/reducers/auth/thunk'

const Login: React.FC = () => {
  const store = useAppSelector(state => state)
  const [error, setError] = useState(false)
  const dispatch = useAppDispatch()
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  console.log('LOGIN PAGE STORE', store)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void=> {
    setError(false)
    const { name, value } = e.target
    setUserData(userData => ({ ...userData, [name]: value }))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault()
    if (validateForm()) {
      dispatch(login({ data: userData, mode: 'login' }))
    } else {
      setError(true)
    }
  }

  const validateForm = () => {
    return userData.email && userData.password
  }
  if (store.auth.error) {
    console.log('LOGIN GRESKA', store.auth)
  }

  return (
    <form className="auth-form" style={{ textAlign: 'center' }}>
      {store.auth.error && <h1>{store.auth.error.message}</h1>}
      <h6 className="auth-title">Login 222</h6>
      <section>
        <div className="form-group custom-input">
          <input
            id="email"
            className="form-control"
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div className="form-group custom-input">
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        {error ? (
          <div className="message-alert">
            <p>All fields are required</p>
          </div>
        ) : null}
      </section>
      <button type="submit" className="btn btn-blue" onClick={e => handleSubmit(e)}>
        Submit
      </button>
    </form>
  )
}
export default Login
