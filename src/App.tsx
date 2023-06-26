import  React  from 'react'
import '../src/css_files/App.css'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import RootLayout from '../pages/RootLayout'
import WentWrong from '../pages/WentWrong'
import {weatherLoader} from '../components/Weather'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import './css_files/buttons.css'
import './css_files/grid.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = {<RootLayout/>} errorElement = {<WentWrong/>}>
    <Route index element = {<Home/>} loader = {weatherLoader} />
    <Route path = "projects" element = {<Projects/>}/>
    <Route path = "contact" element = {<Contact/>}/>
  </Route>
));

const App: React.FC = (): JSX.Element => {

  return (
    <>
      <div className = "main-wrapper flex flex-col items-center">
        <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
