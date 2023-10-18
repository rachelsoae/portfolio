import Project from '../Project/Project'


// iterate over projects and generate Project component with that project's passed in as prop

const Portfolio = () => {
  const PROJECTS = [
    {
      name: 'EverUse',
      tagline: 'This product-focused e-commerce app was built on behalf of the small sustainability business EverUse Upcycled Products.',
      tech: ['React', 'JavaScript', 'Sass', 'Cypress', 'GraphQL', 'GitHub Actions']
    },
    {
      name: 'D&D : The Rookie\'s Roadmap',
      tagline: 'A D&D Wiki for complete beginners. Start your journey here!',
      tech: ['React', 'JavaScript', 'Sass', 'Cypress']
    },
    {
      name: 'Humor Me',
      tagline: 'Need a lift? Enjoy clicking through randomized motivational posters, or try Chaotic Mode at your own risk.',
      tech: ['React', 'JavaScript', 'CSS', 'Cypress', 'Express', 'Knex', 'PostgreSQL']
    }
    // overlook: {
    //   name: 'Overlook',
    //   tagline: 'Book your stay at the luxurious Overlook Hotel. Sign in for a personalized experience. Demo Username: customer30, Demo Password: overlook2021',
    //   tech: ['React', 'JavaScript', 'Sass/SCSS', 'Cypress']
    // }
  ];

  return (
    <div className='projects-section'>
      <h2>Portfolio</h2>
      <section className='projects'>
        {PROJECTS.map(project => <Project project={project} />)}
      </section>
    </div>
  )
}

export default Portfolio;

