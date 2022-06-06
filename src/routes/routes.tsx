import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PublicRoute } from './publicRoute'
import { PrivateRoute } from './privateRoute'
import Landing from 'pages/landing'
import Login from 'pages/auth/login'
import Dashboard from 'pages/dashboard'

const MainRoutes: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export { MainRoutes }
