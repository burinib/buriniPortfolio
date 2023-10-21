// Skills.js
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
import "aos/dist/aos.css";
import "./Skills.css";

const SkillIcon = ({ src, alt }) => (
  <div className="skillIconContainer">
    <img src={src} alt={alt} />
  </div>
);

const Skills = () => {
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
        <div className="TextContainer">
          <h2>
            Mis habilidades se han desarrollado a través de mi formación en
            CoderHouse, cursos complementarios con Jorge Duje y mi actual
            educación en la Tecnicatura en Programación de la Universidad
            Teclab.
          </h2>
        </div>
        <div className="iconContainer">
          <div className="skillIconContainer">
            {skillsData.map((skill, index) => (
              <SkillIcon key={index} src={skill.src} alt={skill.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
