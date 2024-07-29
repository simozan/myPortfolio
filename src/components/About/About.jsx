import React from "react";
import { getImageUrl } from "../../utilis";

export const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        {" "}
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul>
          <li>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Curson Icon"
            ></img>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimize site
              </p>
            </div>
          </li>
          <li>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Curson Icon"
            ></img>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimize site
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
