import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import TopNav from '../TopNav/TopNav';

const Nav = ({isOpen, setIsOpen}) => {
  const flipWidth = 1050;
  const [isBurger, setIsBurger] = useState(window.innerWidth < flipWidth ? true : false);

  const handleResize = () => {
    window.innerWidth < flipWidth ? setIsBurger(true) : setIsBurger(false)
  }

  window.addEventListener('resize', handleResize);

  return (
    <nav className='top-nav' >
      <div className='top-nav__wrapper'>
        <Link to='/'>
          <img src={logo} id='logo' alt='Rachel Soae Prather, Software Engineer' />
        </Link>
        <div className='top-nav__buttons'>
          {
            isBurger === true ? 
            <span 
              className='material-symbols-rounded' 
              id='menu__burger' 
              onClick={() => setIsOpen(!isOpen)}
            >
              menu
            </span> 
            : 
            <TopNav />
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav;

