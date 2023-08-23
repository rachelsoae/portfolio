import headshot from '../assets/headshot.jpg'

const Landing = () => {
  return (
    <div className='page landing'>
      <section className='page__box'>
        <div className='landing__text'>
          <p>Hi, my name is</p>
          <h2>Rachel Soae Prather</h2>
          <p>I’m a Software Developer specializing in front end technologies including React, JavaScript, and Sass</p>
          <button className='landing__button'>View My Work</button>
        </div>
        <img className='landing__img' src={headshot} />
      </section>
    </div>
  )
}

export default Landing;