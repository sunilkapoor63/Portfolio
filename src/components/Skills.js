import React from "react";
import { useGlobalContext } from "../context";
import "./Skills.css";

const Skills = () => {
  const { skillRef } = useGlobalContext();
  const languages = [
    {
      id: 1,
      name: "C",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668017/Portfolio/Logos/c_doi2x0.png",
    },
    {
      id: 2,
      name: "C++",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668018/Portfolio/Logos/cpp_bndne9.png",
    },
    {
      id: 3,
      name: "HTML",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668015/Portfolio/Logos/html_gmt4mk.png",
    },
    {
      id: 4,
      name: "CSS",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668018/Portfolio/Logos/css_loftaw.png",
    },
    {
      id: 5,
      name: "JS",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668016/Portfolio/Logos/js_twieu1.png",
    },

    {
      id: 6,
      name: "NodeJs",
      img: "https://res.cloudinary.com/dne0cvgq8/image/upload/v1705569165/downloadNode_nfyqoh.png",
    },
    {
      id: 7,
      name: "ExpressJs",
      img: "https://res.cloudinary.com/dne0cvgq8/image/upload/v1705569331/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purple-blue-text_zhtfjb.png",
    },
  ];

  const frameworks = [
    {
      id: 1,
      name: "ReactJs",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639666639/Portfolio/Logos/react_egrvku.png",
    },
    {
      id: 2,
      name: "Bootstrap",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668017/Portfolio/Logos/bootstrap_mjfkju.png",
    },
    {
      id: 3,
      name: "Tailwind",
      img: "https://res.cloudinary.com/dne0cvgq8/image/upload/v1705568309/download_u5h1wd.jpg",
    },
    {
      id: 4,
      name: "ChakraUI",
      img: "https://res.cloudinary.com/dne0cvgq8/image/upload/v1710850174/chakraUI_mdgn6t.jpg",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Git",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668015/Portfolio/Logos/git_tu3y7v.png",
    },
    {
      id: 2,
      name: "GitHub",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668015/Portfolio/Logos/giyhub_vtdilv.png",
    },
  ];
  const platforms = [
    // {
    //   id: 1,
    //   name: "Heroku",
    //   img: "https://www.liblogo.com/img-logo/max/he246h2f2-heroku-logo-heroku-logo-transparent-png-stickpng.png",
    // },
    {
      id: 2,
      name: "Vercel",
      img: "https://res.cloudinary.com/dne0cvgq8/image/upload/v1710851328/vercel_v6lgpd.png",
    },
  ];

  const databases = [
    {
      id: 1,
      name: "MongoDB",
      img: "https://res.cloudinary.com/wtcey4wy/image/upload/v1639668016/Portfolio/Logos/mongo_hx2aft.png",
    },
  ];
  return (
    <div ref={skillRef} id="skills" className="skill-container">
      <div className="heading">My Skills</div>
      <div className="skill">
        <h3>Languages I know</h3>
        <div className="skillImg">
          {languages.map((lang) => {
            return (
              <div key={lang.id} className="img">
                <img src={lang.img} alt={`${lang.name} logo`} />
                <div className="name">{lang.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="combine">
        <div className="skill">
          <h3>Frameworks I'm familiar with</h3>
          <div className="skillImg">
            {frameworks.map((fram) => {
              return (
                <div key={fram.id} className="img">
                 <img src={fram.img} alt={`${fram.name} logo`} />
                  <div className="name">{fram.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill">
          <h3>Tools</h3>
          <div className="skillImg">
            {tools.map((tool) => {
              return (
                <div key={tool.id} className="img">
                  <img src={tool.img} alt={`${tool.name} logo`} />
                  <div className="name">{tool.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="combine">
        <div className="skill">
          <h3>Databases I have worked on</h3>
          <div className="skillImg">
            {databases.map((database) => {
              return (
                <div key={database.id} className="img">
                  <img src={database.img} alt={`${database.name} logo`} />
                  <div className="name">{database.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skill">
          <h3>Platforms</h3>
          <div className="skillImg">
            {platforms.map((platform) => {
              return (
                <div key={platform.id} className="img">
                  <img src={platform.img} alt={`${platform.name} logo`} />
                  <div className="name">{platform.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
