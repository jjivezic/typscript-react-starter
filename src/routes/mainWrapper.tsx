import React from 'react'
import Navbar from 'components/navbar'

type MainProps = {
  children: any
}
export const MainWrapper: React.FC<React.PropsWithChildren<MainProps>> = ({ children }) => {
  return (
    <div className="main-wraper">
      <Navbar />
      {children}
    </div>
  )
}
