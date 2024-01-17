import { useState } from 'react'
import './scss/App.scss'
import './jsx/header.jsx'
import Header from './jsx/header.jsx'
import Hero from './jsx/hero.jsx'
import Statistic from './jsx/statistic.jsx'
import Steps from './jsx/steps.jsx'
import AboutUs from './jsx/aboutus.jsx'
import WhoWeHelp from './jsx/whowehelp.jsx'

function App() {
 
  return (
    <>
     <Header/>
     <Hero/>
     <Statistic/> 
     <Steps/>
     <AboutUs/>
     <WhoWeHelp/>
    </>
  )
}

export default App
