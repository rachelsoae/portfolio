import {Link} from 'react-router-dom';

const Menu = ({isOpen, setIsOpen}) => {
  return (
    <nav className='menu'>
      <span className='material-symbols-rounded' id='menu__exit' onClick={() => setIsOpen(!isOpen)}>
        close
      </span>
      <div className='top-nav__buttons menu__buttons'>
        <Link to='/' onClick={() => setIsOpen(!isOpen)}className='menu__button'>Home</Link>
        <Link to='/about' onClick={() => setIsOpen(!isOpen)} className='menu__button'>About</Link>
        <Link to='/portfolio' onClick={() => setIsOpen(!isOpen)} className='menu__button'>Portfolio</Link>
        <Link to='/contact' onClick={() => setIsOpen(!isOpen)} className='menu__button'>Contact</Link>
      </div>
  </nav>
  )
}

export default Menu;