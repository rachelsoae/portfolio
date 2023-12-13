import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import BurgerNav from '../BurgerNav/BurgerNav';
import TopNav from '../TopNav/TopNav';

const Nav = ({isOpen, setIsOpen}) => {
  const pageWidth = window.innerWidth;
  const [isBurger, setIsBurger] = useState(pageWidth < 1000 ? true : false);

  const flipBurger = () => {
    return pageWidth < 1050 ? setIsBurger(true) : setIsBurger(false)
  }

  useEffect(() => {
    window.addEventListener('resize', flipBurger);
  }, [isBurger])

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

