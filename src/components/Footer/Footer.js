import logoTransparent from '../../assets/logoinverted.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/rachel-soae-prather' target='_blank' rel="noopener noreferrer">
          <img className='footer__social' src={linkedin} alt='LinkedIn' />
        </a>
        <a href='https://github.com/rachelsoae' target='_blank' rel="noopener noreferrer">
          <img className='footer__social' src={github} alt='GitHub' />
        </a>
      </div>
      <div className='footer__links'>
        <Link 
          to='/' 
          className='footer__link'
          onClick={() => {window.scroll(0, 0)}}
          >Home</Link>
        <Link 
          to='/about' 
          className='footer__link'
          onClick={() => {window.scroll(0, 0)}}
        >About</Link>
        <Link 
          to='/portfolio' 
          className='footer__link'
          onClick={() => {window.scroll(0, 0)}}
        >Portfolio</Link>
        <Link 
          to='/contact' 
          className='footer__link'
          onClick={() => {window.scroll(0, 0)}}
        >Contact</Link>
      </div>
      <img src={logoTransparent} alt='Rachel Soae Prather, Software Engineer' id='footer__logo' />
    </section>
  )
}

export default Footer;