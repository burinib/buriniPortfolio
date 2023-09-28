import About from "./components/about/About";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <section id="about">
        <About />
      </section>
      <section id="proyects">
        <Slider />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
