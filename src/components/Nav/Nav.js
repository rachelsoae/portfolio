import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import BurgerNav from '../BurgerNav/BurgerNav';
import TopNav from '../TopNav/TopNav';

// on page load and whenever page is resized, run isBurger

const Nav = ({isOpen, setIsOpen}) => {
  const flipWidth = 1050;
  const [isBurger, setIsBurger] = useState(window.innerWidth < flipWidth ? true : false);

  const handleResize = () => {
    window.innerWidth < flipWidth ? setIsBurger(true) : setIsBurger(false)
  }

  window.addEventListener('resize', handleResize);

  return (
    <nav className='top-nav' >
      <div className='nav-wrapper'>
        <h1>
          <Link to='/'>
            <img src={logo} id='logo' alt='Rachel Soae Prather, Software Engineer' />
          </Link>
        </h1>
        <div className='nav-buttons'>
          {isBurger === true ? <BurgerNav isOpen={isOpen} setIsOpen={setIsOpen} /> : <TopNav />}
        </div>
      </div>
    </nav>
  )
}

export default Nav;

