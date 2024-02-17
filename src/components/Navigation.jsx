import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
  return (
    <div>
        <Link to="/">
          About Me
        </Link>
        <Link to="/portfolio">
          Portfolio
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/resume">
          Resume
        </Link>
    </div>
  )
}

export default Navigation