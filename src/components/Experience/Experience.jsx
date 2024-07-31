import React from "react";
import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import history from "../../data/history.json";

import { getImageUrl } from "../../utilis";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id}>
                <div>
                  {" "}
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul>
          {history.map((historyItem, id) => {
            return (
              <li key={id}>
                <img
                  src={getImageUrl(historyItem.imagesrc)}
                  alt={`${historyItem.organization} Logo`}
                />
                <div>
                  <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>{historyItem.experiences.map((experience, id)=>{
                    return <li key={id}>{experience}</li>
                  })}</ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
