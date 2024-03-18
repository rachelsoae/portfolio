import headshot from '../../assets/headshot.jpg'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <h1 className='page-header'>About</h1>
      <div className='about__content'>
        <img 
          className='about__image'
          src={headshot} 
          alt='Rachel smiles warmly at the camera. She is wearing a blue blazer and tortoiseshell glasses.'
        />
        <section className='about__text'>
          <p>
            Hello! 👋 My name is Rachel Soae Prather. I'm a Korean-American Software Engineer and Web Developer located outside Portland, Oregon.
          </p>
          <p>
            My mission is to build technology that builds community. In service of that mission, I work and volunteer with ethical organizations I strongly believe in. I am currently associated with Rita XYZ, Girls Who Code, Out In Tech, and Lesbians Who Tech & Allies.
          </p>
          <p>
            I was voted "Most Uplifting" by my graduating class at the Turing School of Software & Design, which I carry as one of my greatest accomplishments. I love collaboration and helping teams perform at their best!
          </p>
          <p>
            When I have downtime, I can be found eating kimchi, searching for the best honey at the farmer's market, and making music with friends.
          </p>
          <p>
            I would love to connect with you. <Link to='/contact' id='contact-link'>Let's create something meaningful together.</Link>
          </p>
        </section>
      </div>
      {/* <section className='about__resume'>
        <p>Virtual resume coming soon!</p>
      </section> */}
    </div>
  )
}

export default About;