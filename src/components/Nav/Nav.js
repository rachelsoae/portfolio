import {Link, useNavigate} from 'react-router-dom';
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
        <Link to='/contact'>
          <button  className='primary-button'>Contact Me</button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;