import {Link} from 'react-router-dom';

const TopNav = () => {
  return (
    <>
      <Link to='/' onClick={() => {window.scroll(0, 0)}}>Home</Link>
      <Link to='/about' onClick={() => {window.scroll(0, 0)}}>About</Link>
      <Link to='/portfolio' onClick={() => {window.scroll(0, 0)}}>Portfolio</Link>
      <Link to='/contact' onClick={() => {window.scroll(0, 0)}}>
        <button  className='primary-button'>Contact Me</button>
      </Link>
    </>
  )
}

export default TopNav;