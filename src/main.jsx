import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './Components/Header/Header.jsx'
import { Hero } from './Components/Hero/Hero.jsx'
import { SectionAbout } from './Components/SectionAbout/SectionAbout.jsx'
import { SectionSkills } from './Components/SectionSkills/SectionSkills.jsx'
import { SectionFeatures } from './Components/SectionFeatures/SectionFeatures.jsx'
import { SectionWork } from './Components/SectionWork/SectionWork.jsx'
import { SectionContact } from './Components/SectionContact/SectionContact.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import { Copyright } from './Components/Copyright/Copyright.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header/>
      <Hero/>
      <SectionAbout/>
      <SectionSkills/>
      <SectionFeatures/>
      <SectionWork/>
      <SectionContact/>
      <Footer/>
      <Copyright/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
