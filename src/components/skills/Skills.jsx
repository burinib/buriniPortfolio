import html from "../../media/icons/html.png";
import css from "../../media/icons/css.png";
import javaScript from "../../media/icons/javascript.png";
import react from "../../media/icons/react.png";
import sass from "../../media/icons/sass.png";
import mui from "../../media/icons/mui.png";
import typescript from "../../media/icons/ts.png";
import native from "../../media/icons/react_logo_native.png";
import git from "../../media/icons/git.png";
import graph from "../../media/icons/graphql.png";
import npm from "../../media/icons/npm.png";
import github from "../../media/icons/github.png";
import bootstrap from "../../media/icons/bootstrap.png";
import figma from "../../media/icons/figma.png";
import redux from "../../media/icons/redux.png";
import sql from "../../media/icons/sq.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
import "./Skills.css";
import { useEffect } from "react";

const SkillIcon = ({ src, alt, tittle }) => (
  <div
    className="skillIconContainer"
    data-aos="fade-"
    data-aos-easing="linear"
    data-aos-duration="1500"
  >
    <img src={src} alt={alt} title={tittle} />
    <span className="skillName">{tittle}</span>
  </div>
);

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    { src: html, alt: "HTML Logo", tittle: "html" },
    { src: css, alt: "CSS Logo", tittle: "css" },
    { src: javaScript, alt: "JavaScript Logo", tittle: "javaScript" },
    { src: react, alt: "React Logo", tittle: "react" },
    { src: native, alt: "React Native Logo", tittle: "reactNative" },
    { src: typescript, alt: "TypeScript Logo", tittle: "typeScript" },
    { src: github, alt: "GitHub Logo", tittle: "gitHub" },
    { src: mui, alt: "Material-UI Logo", tittle: "mui" },
    { src: sass, alt: "Sass Logo", tittle: "sass" },
    { src: git, alt: "Git Logo", tittle: "git" },
    { src: bootstrap, alt: "Bootstrap Logo", tittle: "bootstrap" },
    { src: npm, alt: "npm Logo", tittle: "npm" },
    { src: graph, alt: "GraphQL Logo", tittle: "gitGraph" },
    { src: figma, alt: "Figma Logo", tittle: "figma" },
    { src: sql, alt: "SQL Logo", tittle: "sql" },
    { src: redux, alt: "Redux Logo", tittle: "redux" },
  ];

  return (
    <section className="skillContainer">
      <div className="skillSubContainer">
        <div className="skillIconContainer">
          {skillsData.map((skill, index) => (
            <SkillIcon
              key={index}
              src={skill.src}
              alt={skill.alt}
              tittle={skill.tittle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
