import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
      <>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
      </>
  )
}

export default App
