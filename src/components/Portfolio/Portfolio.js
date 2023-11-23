import Project from '../Project/Project'
import dndpreview from '../../assets/dndpreview.png';
import everusepreview from '../../assets/everusepreview.png';
import humormepreview from '../../assets/humormepreview.png';

const Portfolio = () => {
  const PROJECTS = [
    {
      id: 1,
      name: 'EverUse',
      tagline: 'This product-focused e-commerce app was built for the small sustainability business EverUse Upcycled Products.',
      techs: ['React', 'JavaScript', 'Sass', 'Cypress', 'GraphQL', 'GitHub Actions'],
      repoLink: 'https://github.com/JamieCaudill/EverUse-FE-Vercel',
      deployedLink: 'https://everuse-fe.vercel.app',
      img: everusepreview
    },
    {
      id: 2,
      name: 'D&D : The Rookie\'s Roadmap',
      tagline: 'A D&D wiki-style resource for complete beginners. Start your journey here!',
      techs: ['React', 'JavaScript', 'Sass', 'Cypress'],
      repoLink: 'https://github.com/rachelsoae/dnd-rookie-roadmap',
      deployedLink: 'http://dnd-rookie-roadmap.vercel.app',
      img: dndpreview
    },
    {
      id: 3,
      name: 'Humor Me',
      tagline: 'A full-stack app centered around self-teaching PERN development',
      techs: ['React', 'JavaScript', 'CSS', 'Cypress', 'Express', 'Knex', 'PostgreSQL'],
      repoLinkFE: 'https://github.com/rachelsoae/humor-me-ui',
      repoLinkBE: 'https://github.com/rachelsoae/humor-me-be',
      deployedLink: 'http://humor-me-ui.vercel.app',
      img: humormepreview
    }
    // overlook: {
    //   id: 4,
    //   name: 'Overlook',
    //   tagline: 'Book your stay at the luxurious Overlook Hotel. Sign in for a personalized experience.',
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

