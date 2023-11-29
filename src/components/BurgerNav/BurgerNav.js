import {Link} from 'react-router-dom';

const BurgerNav = ({isOpen, setIsOpen}) => {
  return (
    <>
      <Link to='/contact'>
        <button  className='primary-button'>Contact Me</button>
      </Link>
      <span className='material-symbols-rounded' onClick={() => setIsOpen(!isOpen)}>
        menu
      </span> 
    </>
  )  
}

export default BurgerNav;