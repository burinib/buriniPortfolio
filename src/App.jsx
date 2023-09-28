import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div>
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
