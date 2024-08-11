import React from "react";

import styles from "./Contact.module.css"
import { getImageUrl } from "../../utilis";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:simone.zanni.87@gmail.com"> simone.zanni.87@gmail.com </a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/simozan"> linkedin.com/SimoneZanni </a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/simozan"> github.com/SimoneZanni </a>
        </li>

      </ul>
    </footer>
  );
};
