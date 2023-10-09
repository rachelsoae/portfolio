import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link to='/'>
          <img src={logo} id='logo' alt='Rachel Soae, Software Engineer' />
        </Link>
      </h1>
      
      <div className='nav__buttons'>
        <Link to='/about'>ABOUT</Link>
        <Link to='/portfolio'>PORTFOLIO</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
    </nav>
  )
}

export default Nav;