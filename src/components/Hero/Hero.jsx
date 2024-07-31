import React from "react";
import { getImageUrl } from "../../utilis";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Simone</h1>
        <p className={styles.description}>
          I am a Full Stack Web Developer who started coding during the pandemic
          as a self-taught developer. 
        </p>
        <a
          href="mailto:simone.zanni.87@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/simo.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
