import headshot from '../../assets/headshot.jpg'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className='about-wrapper'>
      <h2>About</h2>
      <div className='about-content'>
        <img 
          src={headshot} 
          alt='Rachel, a woman with glasses, long brown hair, and wearing a blue blazer, smiles warmly at the camera'
          className='about-image'
        />
        <section className='about-text'>
          <p>
            Hello! 👋 My name is Rachel Soae Prather. I'm a Korean-American Software Engineer and Web Developer located outside Portland, Oregon. 
          </p>
          <p> 
            Born and raised in Northern California, I attended the University of Kansas (Rock Chalk!) in Lawrence, KS, and resided briefly in Fort Collins, CO, before finally relocating to the Pacific Northwest.
          </p>
          <p>
            A resourceful, enthusiastic, and community-oriented technologist, I bring a breadth of knowledge to my work, gained through varied experience in veterinary medicine, nonprofit operations, education, and mortgage lending. 
          </p>
          <p>
            I am dedicated to excellence and constant improvement and have earned multiple awards for outstanding performance and service... although my proudest achievement was being voted "Most Uplifting" by my graduating class at Turing School of Software & Design, where I earned a Certificate in Front End Software Engineering. 
          </p>
          <p>
            My mission is to Build Technology that Builds Community. In service of that mission, I work and volunteer with ethical organizations that strive to better the world around them. I am currently associated with Rita XYZ, Lesbians Who Tech & Allies, and PDXWIT.
          </p>
          <p>
            In my downtime, I can be found eating kimchi, hunting for the best honey at the farmer's market, and making music with friends.
          </p>
          <p>
            I would love to connect with you. <Link to='/contact' id='contact-link'>Let's build something together.</Link>
          </p>
        </section>
      </div>
    </div>
  )
}

export default About;