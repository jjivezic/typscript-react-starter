import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'store/hook'
import './navbar.scss'

const Navbar:React.FC = () => {

  // const dispatch = useDispatch()
  const store = useAppSelector(state => state)
  const logout = () => {
    // dispatch(userActions.logout())
  }
  console.log('STORE', store)
  return (
    <nav>
      <h3>STARTER</h3>
      <ul>
        <li>
          <NavLink exact to="/">
           Home
          </NavLink>
        </li>
        {store.auth.user && (
          <li>
            <NavLink to="/app">Dashboard</NavLink>
          </li>
        )}
        {!store.auth.user && (
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        )}
        <li>
          {store.auth.user && (
            <a href="/" onClick={logout}>
              Logout
            </a>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
