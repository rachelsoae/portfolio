import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link to='#' className='nav__text nav__header'>
          <img src={logo} alt='Rachel Soae, Software Engineer' />
        </Link>
      </h1>
      
      <div className='nav__buttons'>
        <Link to='/#projects' className='nav__text nav__button'>Portfolio</Link>
        <Link to='/#about' className='nav__text nav__button'>About</Link>
        <Link to='/#contact' className='nav__text nav__button'>Contact</Link>
      </div>
    </nav>
  )
}

export default Nav;