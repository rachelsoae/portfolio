import philomena from '../../assets/philomena.jpeg'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero-section'>
      <section className='hero-text-container'>
        <div>
          <h2>Software Engineer | Web Developer</h2>
          <p>Building technology that builds community.</p>
          <p>Let’s create something together.</p>
          <div className='buttons-container'>
            <Link to='/contact'>
              <button className='primary-button'>Contact Me</button>
            </Link>
            <Link to='/portfolio'>
              <button className='secondary-button'>View My Work</button>
            </Link>
          </div>
        </div>
      </section>
      <div className='hero-image-container'>
        <img 
          src={philomena} 
          alt='a fiddle-leaf fig grows skyward against an off-white backdrop'
        />
      </div>   
    </div>
  )
}

export default Home;