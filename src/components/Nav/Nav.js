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
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact' className='primary-button'>Contact Me</Link>
      </div>
    </nav>
  )
}

export default Nav;