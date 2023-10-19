import Project from '../Project/Project'

const Portfolio = () => {
  const PROJECTS = [
    {
      id: 1,
      name: 'EverUse',
      tagline: 'This product-focused e-commerce app was built on behalf of the small sustainability business EverUse Upcycled Products.',
      techs: ['React', 'JavaScript', 'Sass', 'Cypress', 'GraphQL', 'GitHub Actions']
    },
    {
      id: 2,
      name: 'D&D : The Rookie\'s Roadmap',
      tagline: 'A D&D Wiki for complete beginners. Start your journey here!',
      techs: ['React', 'JavaScript', 'Sass', 'Cypress']
    },
    {
      id: 3,
      name: 'Humor Me',
      tagline: 'Need a lift? Enjoy clicking through randomized motivational posters, or try Chaotic Mode at your own risk.',
      techs: ['React', 'JavaScript', 'CSS', 'Cypress', 'Express', 'Knex', 'PostgreSQL']
    }
    // overlook: {
    //   id: 4,
    //   name: 'Overlook',
    //   tagline: 'Book your stay at the luxurious Overlook Hotel. Sign in for a personalized experience. Demo Username: customer30, Demo Password: overlook2021',
    //   tech: ['React', 'JavaScript', 'Sass/SCSS', 'Cypress']
    // }
  ];

  return (
    <div className='projects-section'>
      <h2>Portfolio</h2>
      <section className='projects'>
        {PROJECTS.map(project => <Project key={project.id} project={project} />)}
      </section>
    </div>
  )
}

export default Portfolio;

