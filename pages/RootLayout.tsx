import React from 'react'
import {Outlet} from 'react-router-dom'

import NavBar from '../components/NavBar'
// d
const RootLayout: React.FC = (): JSX.Element => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default RootLayout