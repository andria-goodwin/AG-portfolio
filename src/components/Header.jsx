import { Link } from 'react-router-dom';

import Navigation from './Navigation'

function Header() {
  return (
    <div>
        
        <Link to="/">
          <h1>Andria Goodwin</h1>
        </Link>

        <Navigation/>
    </div>
  )
}

export default Header