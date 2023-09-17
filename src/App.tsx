import React from 'react'
import '../src/css_files/App.css'

import Preloader from '../components/Preloader'

import Home, { homeWeatherLoader } from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import RootLayout from '../pages/RootLayout'
import WentWrong from '../pages/WentWrong'
import ContactSuccess from '../pages/ContactSuccess'
import ContactFail from '../pages/ContactFail'
import ProjectPage from '../pages/ProjectPage'

import ScrollToTop from '../components/ScrollToTop'
//d
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
          <ScrollToTop/>
          <Routes>
            <Route path = "/" element = {<RootLayout/>} errorElement = {<WentWrong/>}>
              <Route index element = {<Home/>} loader = {homeWeatherLoader}/>
              <Route path = "projects">
                <Route index element = {<Projects/>}/>
                <Route path = ":projectId" element = {<ProjectPage/>}/>
              </Route>
              <Route path = "contact" element = {<Contact/>}/>
            </Route>
            <Route path = '/contact/success' element = {<ContactSuccess/>} errorElement = {<WentWrong/>}/>
            <Route path = '/contact/fail' element = {<ContactFail/>} errorElement = {<WentWrong/>}/>
          </Routes>
        </div>
      </>
    )
}

export default App
