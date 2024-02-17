import { useState } from 'react'
import './index.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const styles = {
  container: {
    marginTop: '100px',
    marginBottom: '100px',
  },
};

function App() {

  return (
      <>
      <Header/>
      <Container style={styles.container}>
        <Outlet/>
      </Container>
      <Footer/>
      </>
  )
}

export default App
