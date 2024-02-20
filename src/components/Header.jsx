import { Link } from 'react-router-dom';

import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
  container: {
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingTop:'1%',
    paddingBottom: '1%',
    background: '#27024D',
    color: "#D6FEFF",
    fontFamily: "monospace",
  },
  link: {
    textDecoration: "none",
  },
  h1: {
    fontSize: '300%',
    
  }
}

function Header() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Andria Goodwin</h1>
      <Navigation/>
    </div>
  )
}

export default Header