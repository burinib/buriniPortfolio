import audio from "../../media/projects/audio.avif";
import tienda from "../../media/projects/tienda1.avif";
import tienda1 from "../../media/projects/tienda2.avif";
import portfolio from "../../media/imgPersonalport.jpg";

import "./Slider.css";
import { useState } from "react";

const Slider = () => {
  const projects = [
    {
      title: "E-commerce ",
      image: audio,
      link: "https://ecommerce-audio-prc5.vercel.app/",
    },
    {
      title: "Outfit one ",
      image: tienda,
      link: "https://burinib.github.io/react-ecommerce/",
    },
    {
      title: "Outfit two ",
      image: tienda1,
      link: "https://burinib.github.io/proyecto-bahia/",
    },
    {
      title: "My portfolio",
      image: portfolio,
      link: "https://burinib-cv.vercel.app/",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + projects.length) % projects.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-container2">
        <div className="containerInfoProject"></div>
        <div className="ContainerProjects">
          <h3 className="slide_tittle">{projects[currentSlide].title}</h3>
          <div className="carousel">
            <div className="project-slide">
              <button className="prev-button" onClick={handlePrevSlide}>
                ← Previous
              </button>
              <div className="project-slide-tittleName">
                <a
                  href={projects[currentSlide].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="slide_image"
                    src={projects[currentSlide].image}
                    alt={projects[currentSlide].title}
                  />
                </a>
              </div>
              <button className="next-button" onClick={handleNextSlide}>
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
