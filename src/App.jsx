import { useRef } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/About';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Project from './components/projects';

function App() {
  const skillsRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <Navbar />

      <section id="home">
        <Header />
      </section>

      <section id="About">
        <About onScrollToSkills={scrollToSkills} />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Projects">
        <Project />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
