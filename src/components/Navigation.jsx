import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <Link to="/about">
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