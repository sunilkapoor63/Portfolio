import React from "react";
import "./Projects.css";
import SneakPeak from "./images/sneakpeak.png";
import { useGlobalContext } from "../context";

const Projects = () => {
  const { projectRef } = useGlobalContext();

  return (
    <div ref={projectRef} className="projects-container">
      <div className="heading">My Projects</div>
      <div className="projects">
        <a
          href="https://github.com/sunilkapoor63/News-App"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project width1">
            <div className="proj-img">
              <img src={SneakPeak} alt="Sneakpeak"></img>
            </div>
            <div className="proj-desc">
              <h2>Job-Seeking Web Application</h2>
              <p className="head">Made using MERN Stack</p>
              <p>
              Developed system enabling users to register as employers or job seekers, post, edit, expire job listings, streamline applications, ensuring precise employer control.
              </p>
            </div>
          </div>
        </a>
        <div className="sm">
          <a
            href="https://weather-blue-two.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project width2">
              <div className="proj-desc">
                <h2>News App</h2>
                <p className="head">Made using React</p>
                <p>
                NewsMonkey is a news app which Fetch Real-Time News from newsapi, user can read category wise news with infinite scroll feature.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://resturant-sigma-opal.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project width2">
              <div className="proj-desc">
                <h2>Weather App</h2>
                <p className="head">Made using React</p>
                <p>
                Weather App is a responsive website with user-friendly weather interface, ensuring seamless experience across devices for optimal compatibility.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
