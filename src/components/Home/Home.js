import philomena from '../../assets/philomena.jpeg'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero'>
      <div className='hero__text-container'>
        <section className='hero__text-wrapper'>
          <h1>Software Engineer & Web Developer</h1>
          <p> Building technology that builds community. Let’s create something meaningful together.</p>
          <div className='hero__buttons-container'>
            <Link to='/contact'>
              <button className='primary-button'>Contact Me</button>
            </Link>
            <Link to='/portfolio'>
              <button className='secondary-button'>View My Work</button>
            </Link>
          </div>
        </section>
      </div>
      <div className='hero__image-container'>
        <img 
          src={philomena} 
          alt='a fiddle-leaf fig grows skyward against an off-white backdrop'
        />
      </div>   
    </div>
  )
}

export default Home;