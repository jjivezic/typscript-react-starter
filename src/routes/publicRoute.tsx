import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { localStorageService } from 'services/localstorage.service'
import { MainWrapper } from './mainWrapper'

// export const PublicRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return (
//           <MainWrapper>
//             <Component {...props} {...rest} />
//           </MainWrapper>
//         )
//       }}
//     />
//   )
// }

export const PublicRoute: React.FC = () => {
  const auth = localStorageService.isAuth()
  return auth ? <Navigate to="/dashboard" /> : <MainWrapper><Outlet /></MainWrapper>
}