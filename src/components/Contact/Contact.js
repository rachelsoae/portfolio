import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <div className='contact__email-container'>
        <p>Email me at</p>
        <a href='mailto:rachelprather1@gmail.com'>
          <p className='contact__email'> rachelprather1@gmail.com</p>
        </a>
      </div>
      <div className='contact__socials-container'>
        <a href='https://www.linkedin.com/in/rachel-soae-prather'>
          <img className='contact__social' src={linkedin} alt='LinkedIn' />
        </a>
        <a href='https://github.com/rachelsoae'>
          <img className='contact__social' src={github} alt='GitHub' />
        </a>
      </div>
    </div>
  )
}

export default Contact;