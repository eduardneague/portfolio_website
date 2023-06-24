import React from 'react'
import {Outlet} from 'react-router-dom'

import NavBar from '../components/NavBar'
// dd
const RootLayout: React.FC = (): JSX.Element => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default RootLayout