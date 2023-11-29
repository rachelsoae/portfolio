import {Link} from 'react-router-dom';

const TopNav = () => {
  return (
    <div className='nav-buttons'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/contact'>
        <button  className='primary-button'>Contact Me</button>
      </Link>
    </div>
  )
}

export default TopNav;