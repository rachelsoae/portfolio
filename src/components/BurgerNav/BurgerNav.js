import {Link} from 'react-router-dom';
import {useState} from 'react';

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {
        isOpen ?
        <h1>open</h1>
        :
        <span className='material-symbols-rounded'>
          menu
        </span> 
      }
    </>
  )  
}

export default BurgerNav;