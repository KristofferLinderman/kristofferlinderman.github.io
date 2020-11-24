import React, { useRef } from 'react';
import Menu from './components/Menu/Menu';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const landingRef = useRef();
  const projectRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  return (
    <>
      <Menu sections={{
        landingPage: landingRef,
        projectPage: projectRef,
        aboutPage: aboutRef,
        contactPage: contactRef,
      }}
      />
      <LandingPage ref={landingRef} />
      <Projects ref={projectRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
