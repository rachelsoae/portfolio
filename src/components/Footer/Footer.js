import logoTransparent from '../../assets/logoinverted.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/rachel-soae-prather'>
          <img className='footer__social' src={linkedin} alt='LinkedIn' />
        </a>
        <a href='https://github.com/rachelsoae'>
          <img className='footer__social' src={github} alt='GitHub' />
        </a>
      </div>
      <div className='footer__links'>
        <Link to='/home' className='footer__link'>Home</Link>
        <Link to='/home' className='footer__link'>About</Link>
        <Link to='/home' className='footer__link'>Portfolio</Link>
        <Link to='/home' className='footer__link'>Contact</Link>
      </div>
      <img src={logoTransparent} alt='Rachel Soae Prather, Software Engineer' id='footer__logo' />
    </section>
  )
}

export default Footer;