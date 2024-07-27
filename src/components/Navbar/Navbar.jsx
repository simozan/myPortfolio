import React, {useState} from "react";

import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utilis";

export const Navbar = () => {
  cont [menuOpen, setMenuOpen] = useState(false)
  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Portfolio</a>
    <div className={styles.menu}>
      <img 
      className={styles.menuBtn} 
      src={manuOpen ? getImageUrl("nav/menuIcon.png")}  alt="menu-button"/>
      <ul className={styles.menuItems}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>)
};
