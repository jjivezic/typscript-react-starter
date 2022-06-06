import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'store/hook'
import './navbar.scss'

const Navbar:React.FC = () => {

  // const dispatch = useDispatch()
  const user = useAppSelector(state => state.auth.user)
  const logout = () => {
    // dispatch(userActions.logout())
  }
  console.log('STORE', user)
  return (
    <nav>
      <h3>STARTER</h3>
      <ul>
        <li>
          <NavLink to="/">
           Home
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        )}
        {user && (
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        )}
        <li>
          {user && (
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
