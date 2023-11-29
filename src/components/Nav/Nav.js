import {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import BurgerNav from '../BurgerNav/BurgerNav';
import TopNav from '../TopNav/TopNav';

const Nav = () => {

        // import hamburger icon
        // set state in App that will determine if hamburger is visible or if full nav is visible (isHamburger?)
  // CTA should be visible at all times
  // when screen shrinks below certain size (1000px?) flip isHamburger to true
        // conditionally render nav buttons or hamburger based on isHamburger
  // when hamburger is clicked, flip state (isOpen?)
  // when menu is open, overlay nav should be visible, hamburger icon should be invisible, exit button should be visible
        // create component for hamburger Nav     

  const [isBurger, setIsBurger] = useState(true);

  return (
    <nav>
      <div className='nav-wrapper'>
        <h1>
          <Link to='/'>
            <img src={logo} id='logo' alt='Rachel Soae Prather, Software Engineer' />
          </Link>
        </h1>
        <div className='nav-buttons'>
          {isBurger ? <BurgerNav /> : <TopNav />}
        </div>
      </div>
    </nav>
  )
}

export default Nav;

