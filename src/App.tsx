import  React  from 'react'

import Home from '../pages/Home'
import RootLayout from '../pages/RootLayout'
import WentWrong from '../pages/WentWrong'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import './css_files/grid.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = {<RootLayout/>} errorElement = {<WentWrong/>}>
    <Route index element = {<Home/>}/>
  </Route>
));

const App: React.FC = (): JSX.Element => {

  return (
    <>
      <div>
        <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
