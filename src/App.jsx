import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects';
import SkillPage from './pages/Skill';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar'
import { Helmet } from 'react-helmet-async';


function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Sonima Pokhrel | Portfolio</title>
        <meta name="description" content="Sonima Pokhrel — passionate web designer, C++/PHP programmer, and National Robotics Competition winner. Explore my projects, skills, and achievements." />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/skill' element={<SkillPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App