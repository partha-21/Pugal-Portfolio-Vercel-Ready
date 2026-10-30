import About from '@/components/sections/About';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import BackToTop from '@/components/layout/BackToTop';
import CustomCursor from '@/components/layout/CustomCursor';
import Footer from '@/components/layout/Footer';
import IntroCurtain from '@/components/layout/IntroCurtain';
import Navbar from '@/components/layout/Navbar';

function App() {
  return (
    <>
      <IntroCurtain />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
