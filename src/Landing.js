import Nav from './Nav'

const Landing = () => {
  return (
    <>
    <Nav />
    <div className='page landing'>
      <section className='landing__box'>
        <div className='landing__text'>
          <p>Hi, my name is</p>
          <h2>Rachel Soae Prather</h2>
          <p>I’m a Software Developer specializing in front end technologies including React, JavaScript, and Sass</p>
          <button className='landing__button'>View My Work</button>
        </div>
      </section>
    </div>
    </>
  )
}

export default Landing;