import placeholder from '../../assets/flowers-bw-op.png'

const Home = () => {
  return (
    <div className='hero-section'>
      <section className='hero-text-container'>
        <div>
          <h2>Software Engineer | Web Developer</h2>
          <p>Building community through technology.</p>
          <p>Let’s create something together.</p>
          <div className='buttons-container'>
            <button className='primary-button'>Contact Me</button>
            <button className='secondary-button'>View My Work</button>
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