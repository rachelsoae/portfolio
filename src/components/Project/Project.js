// destructure argument in component and dynamically render the different parts

const Project = ({project}) => {
  const {name, tagline, tech} = project;

  return (
    <article>
      <h3>{name}</h3>
      <p>{tagline}</p>
      {tech.map(t => <p>{t}</p>)}
    </article>
  )
}

export default Project;