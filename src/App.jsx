import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects';
import SkillPage from './pages/Skill';
import ContactPage from './pages/Contact';
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/skill' element={<SkillPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App