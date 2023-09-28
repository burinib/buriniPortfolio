import About from "./components/about/About";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
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
      <section id="info">
        <Info />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
