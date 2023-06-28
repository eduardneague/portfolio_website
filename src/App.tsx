import  React  from 'react'
import '../src/css_files/App.css'

import Preloader from '../components/Preloader'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import RootLayout from '../pages/RootLayout'
import WentWrong from '../pages/WentWrong'

// changed to classic Routes method because of Framer Motion (IMPORTANT!)

import {
  Route,
  Routes,
} from 'react-router-dom'

import './css_files/buttons.css'
import './css_files/grid.css'

const App: React.FC = (): JSX.Element => {
    return (
      <>
      <Preloader/> 
        <div className = "main-wrapper flex flex-col items-center">
          <Routes>
            <Route path = "/" element = {<RootLayout/>} errorElement = {<WentWrong/>}>
              <Route index element = {<Home/>}/>
              <Route path = "projects" element = {<Projects/>}/>
              <Route path = "contact" element = {<Contact/>}/>
            </Route>
          </Routes>
        </div>
      </>
    )
}

export default App
