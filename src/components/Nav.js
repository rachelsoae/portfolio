import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  return (
    <nav>
      <div className='nav__text nav__header'>
        <HashLink smooth to='#'><h1>Rachel Soae Prather</h1></HashLink>
      </div>
      <div className='nav__buttons'>
        <HashLink smooth to='/#projects'className='nav__text nav__button'>Portfolio</HashLink>
        <HashLink smooth to='/#about' className='nav__text nav__button'>About</HashLink>
        <HashLink smooth to='/#contact' className='nav__text nav__button'>Contact</HashLink>
      </div>
    </nav>
  )
}

export default Nav;