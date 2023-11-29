import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import BurgerNav from '../BurgerNav/BurgerNav';
import TopNav from '../TopNav/TopNav';

const Nav = () => {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <nav>
      <div className='nav-wrapper'>
        <h1>
          <Link to='/'>
            <img src={logo} id='logo' alt='Rachel Soae Prather, Software Engineer' />
          </Link>
        </h1>
        {isBurger ? <BurgerNav /> : <TopNav />}
        {/* <div className='nav-buttons'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>
            <button  className='primary-button'>Contact Me</button>
          </Link>
        </div> */}
      </div>
    </nav>
  )
}

export default Nav;

