import headshot from '../../assets/headshot.jpg'

const About = () => {
  return (
    <div className='about__wrapper'>
      <h2>About</h2>
      <div className='about__content'>
        <img 
          src={headshot} 
          alt='Rachel, a woman with glasses, long brown hair, and wearing a blue blazer, smiles warmly at the camera'
          className='about__image'
        />
        <section className='about__text'>
          <p>
            Rachel Soae Prather is a Korean-American Software Engineer and Web Developer residing outside Portland, Oregon. 
          </p>
          <p> 
            Born and raised in Northern California, she attended the University of Kansas (Rock Chalk!) in Lawrence, KS and resided briefly in Fort Collins, CO, before finally relocating to the Pacific Northwest.
          </p>
          <p>
            A resourceful, enthusiastic, and community-oriented technologist, Rachel brings a breadth of knowledge to her work every day, gained from her varied experience in veterinary medicine, nonprofit operations, education, and mortgage lending. Her dedication to excellence has grown throughout her career, earning multiple awards for outstanding performance and service... though she'll tell you her proudest achievement was being voted "Most Uplifting" by her graduating class at Turing School of Software & Design, where she earned a Certificate in Front End Software Engineering. 
          </p>
          <p>
            Rachel's personal mission is to Build Technology that Builds Community. In service of that mission, she works and volunteers with ethical organizations that strive to better the world around them. 
          </p>
          <p>
            When she's not coding, Rachel can be found eating kimchi, hunting for the best honey at the farmer's market, and making music with her friends. 
          </p>
        </section>
      </div>
    </div>
  )
}

export default About;