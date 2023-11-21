import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

const Contact = () => {
  return (
    <div className='contact-section'>
      <h2>Contact</h2>
      <div className='email-container'>
        <p>Email me at</p>
        <a href='mailto:rachelprather1@gmail.com'>
          <p className='email'> rachelprather1@gmail.com</p>
        </a>
      </div>
      <div className='social-icons-container'>
        <a href='https://www.linkedin.com/in/rachel-soae-prather'>
          <img className='social-icon' src={linkedin} alt='LinkedIn' />
        </a>
        <a href='https://github.com/rachelsoae'>
          <img className='social-icon' src={github} alt='GitHub' />
        </a>
      </div>
    </div>
  )
}

export default Contact;