import './App.css';
import Footer from 'src/sections/Footer/Footer.jsx';
import Contact from 'src/sections/Contact/Contact.jsx';
import Hero from 'src/sections/Hero/Hero';
import Projects from 'src/sections/Projects/Projects';
import Skills from 'src/sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
