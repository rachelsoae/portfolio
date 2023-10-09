import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      
      <Link to='#' className='nav__text nav__header'>
        <h1>🌻 SoaeSpace</h1>
      </Link>
      <div className='nav__buttons'>
        <Link to='/#projects' className='nav__text nav__button'>Portfolio</Link>
        <Link to='/#about' className='nav__text nav__button'>About</Link>
        <Link to='/#contact' className='nav__text nav__button'>Contact</Link>
      </div>
    </nav>
  )
}

export default Nav;