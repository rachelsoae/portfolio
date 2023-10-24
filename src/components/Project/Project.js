import css from '../../assets/icons/css.png';
import cypress from '../../assets/icons/cypress.png';
import express from '../../assets/icons/express.png';
import githubactions from '../../assets/icons/githubactions.png';
import graphql from '../../assets/icons/graphql.png';
import javascript from '../../assets/icons/javascript.png';
import knex from '../../assets/icons/knex.png';
import postgresql from '../../assets/icons/postgresql.png';
import react from '../../assets/icons/react.png';
import sass from '../../assets/icons/sass.png';
import {useState} from 'react';

const ICONS = {
  'CSS': css,
  'Cypress': cypress,
  'Express': express,
  'GitHub Actions': githubactions,
  'GraphQL': graphql,
  'JavaScript': javascript,
  'Knex': knex,
  'PostgreSQL': postgresql,
  'Sass': sass,
  'React': react, 
}

const Project = ({project}) => {
  const {id, name, tagline, techs, repoLink, repoLinkFE, repoLinkBE, deployedLink, img} = project;

  const [isFront, setIsFront] = useState(true)

  const toggleFront = () => {
    setIsFront(prevState => !prevState)
  }

  const frontStyle = {
    backgroundImage: isFront && `url(${img})`,
    backgroundSize: isFront && 'cover',
    backgroundPosition: isFront && 'center'
  }

  return (
    <>
      <article className='card-front' style={frontStyle}>

      </article>
      <article className='card-back'>
      <h3>{name}</h3>
        <p>{tagline}</p>
        <div className='tech'>
          {techs.map(tech => {
            return (
              <div key={tech} className='tech-icon-container'>
                <img src={ICONS[tech]} alt={tech} />
                <p>{tech}</p>   
              </div>
            )
          })}
        </div>
        {name === 'Humor Me' ?
          <div className='project-buttons-container'>
            <a href={deployedLink}>
              <button className='primary-button'>View Live</button>
            </a>
            <div className='humor-me-buttons'>
              <a href={repoLinkFE}>
                <button className='primary-button'>GitHub (FE)</button>
              </a>
              <a href={repoLinkBE}>
                <button className='primary-button'>GitHub (BE)</button>
              </a>
            </div>
          </div>
          :
          <div className='project-buttons-container'>
            <a href={deployedLink}>
              <button className='primary-button'>View Live</button>
            </a>
            <a href={repoLink}>
              <button className='primary-button'>GitHub</button>
            </a>
          </div> 
        }
      </article>
    </>
  )
}

export default Project;