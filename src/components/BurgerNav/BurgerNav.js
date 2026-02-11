const BurgerNav = ({isOpen, setIsOpen}) => {
  return (
    <span className='material-symbols-rounded' onClick={() => setIsOpen(!isOpen)}>
      menu
    </span> 
  )  
}

export default BurgerNav;