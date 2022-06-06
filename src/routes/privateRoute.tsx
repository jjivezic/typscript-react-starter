import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { MainWrapper } from './mainWrapper'
import { localStorageService } from 'services/localstorage.service'


export const PrivateRoute: React.FC = () => {

  const auth = localStorageService.isAuth()

  return auth ? <MainWrapper><Outlet /></MainWrapper> : <Navigate to="/" />
}



// interface PrivateRouteProps extends RouteProps {
//   component: any;
// }
// export const PrivateRoute: React.FC<React.PropsWithChildren<PrivateRouteProps>> = (props: PrivateRouteProps) => {
//   const { component: Component, ...rest } = props
//   return (
//     <Route
//       {...rest}
//       render={(props: PrivateRouteProps): JSX.Element => {
//         return localStorageService.isAuth() ? (
//           <MainWrapper>
//             <Component {...props} {...rest} />
//           </MainWrapper>
//         ) : (
//           <Navigate to="/" />
//         )
//       }}
//     />
//   )
// }
