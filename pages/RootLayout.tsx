import React from 'react'
import {Outlet} from 'react-router-dom'


const RootLayout: React.FC = (): JSX.Element => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default RootLayout