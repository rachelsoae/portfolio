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

  const flipCard = () => {
    setIsFront(prevState => !prevState)
  }

  return (
    <>
      {isFront ?
      <article 
        className='card__front' 
        style={{
          backgroundImage: isFront && `url(${img})`,
          backgroundSize: isFront && 'cover',
          backgroundPosition: isFront && 'center'
        }}
        onMouseEnter={() => flipCard()}
      >
      </article>
      :
      <article 
        className='card__back'
        onMouseLeave={() => flipCard()}
      >
      <h2 className='card__title'>{name}</h2>
        <p className='card__tagline'>{tagline}</p>
        <div className='tech'>
          {techs.map(tech => {
            return (
              <div key={tech} className='tech__icon-container'>
                <img className='tech__icon' src={ICONS[tech]} alt="" />
                <p className='tech__label'>{tech}</p>   
              </div>
            )
          })}
        </div>
        {name === 'Humor Me' ?
          <div className='project__buttons-container'>
            <a href={deployedLink} target='_blank'>
              <button className='primary-button card__button'>View Live</button>
            </a>
            <a href={repoLinkFE} target='_blank'>
              <button className='primary-button card__button'>GitHub (FE)</button>
            </a>
            <a href={repoLinkBE} target='_blank'>
              <button className='primary-button card__button'>GitHub (BE)</button>
            </a>
          </div>
          :
          <div className='project__buttons-container'>
            <a href={deployedLink} target='_blank'>
              <button className='primary-button card__button'>View Live</button>
            </a>
            <a href={repoLink} target='_blank'>
              <button className='primary-button card__button'>GitHub</button>
            </a>
          </div> 
        }
      </article>}
    </>
  )
}

export default Project;