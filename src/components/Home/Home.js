import placeholder from '../../assets/flowers-bw-op.png'
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
      {/* <section className='content-image-container'> */}
        <img 
          src={placeholder} 
          alt='this image should be replaced'
          className='hero-image'
        />
      {/* </section> */}
    </div>
  )
}

export default Home;