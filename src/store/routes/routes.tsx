import React from 'react'
import { Switch } from 'react-router-dom'
import { PublicRoute } from './publicRoute'
import { PrivateRoute } from './privateRoute'
import Landing from 'pages/landing'
import Login from 'pages/auth/login'
import Dashboard from 'pages/dashboard'

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Landing} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/app" component={Dashboard} />
    </Switch>
  )
}

export { Routes }
