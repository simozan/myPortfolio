import React from 'react'
import { getImageUrl } from "../../utilis";

import styles from "./ProjectCard.module.css"

export const ProjectCard = ({
    project : {title, imageSrc, description, skills, demo, source}

    }) => {
  return (
    <div className={styles.container}>
    <img src={getImageUrl
      (imageSrc)} alt={`Image of ${title}`} 
      className={styles.image}/>
    <h3 className={styles.title}>{title}</h3>
    <p>{description}</p>
    <ul>
      {skills.map((skill, id) => {
        <li key={id}>{skill}</li>;
      })}
    </ul>
    <div>
      <a href={demo}>Demo</a>
      <a href={source}>Source</a>
    </div>
  </div>
  )
}
