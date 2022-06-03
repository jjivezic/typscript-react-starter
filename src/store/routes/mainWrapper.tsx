import React from 'react'
import Navbar from 'components/navbar'

export const MainWrapper: React.FC<React.PropsWithChildren<unknown>> = props=> {
  return (
    <div className="main-wraper">
      <Navbar />
      {props.children}
    </div>
  )
}
