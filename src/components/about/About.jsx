import imgPersonal from "../../media/imgPersonal.jpg";
import descarga from "../../media/CV - Burini Braian.pdf";

import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-container2">
        <div className="about-desc">
          <h3 className="sobreMiAbout">SOBRE MI</h3>

          <p>
            ¡Hola! Soy Braian, un apasionado desarrollador especializado en
            aplicaciones desktop, web y móviles, con enfoque en Front-End.
          </p>
          <p>
            Siempre busco mejorar mis habilidades y adquirir nuevos
            conocimientos para ofrecer soluciones creativas y eficientes en el
            desarrollo de software. Estoy emocionado por las oportunidades en la
            industria tecnológica y comprometido a contribuir al éxito de los
            proyectos en los que participo. ¡Gracias por considerar mi perfil!
          </p>
          <div className="descargaAbout">
            <a href={descarga} download>
              Descarga mi CV
            </a>
          </div>
        </div>

        <div
          className="about-img"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="aboutContainerImg">
            <img className="img-personal" src={imgPersonal} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
