import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import MainContent from './Components/MainContent';
import AboutMe from './Components/Pages/AboutMe';
import Skills from './Components/Pages/Skills';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';
import LoadingAnimation from './Components/LoadingAnimation';
import MouseFollower from './Components/MouseFollower';
import Experience from './Components/Pages/Experience';
import Projects from './Components/Pages/Projects';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: true },
        duration: 1.5,
        ease: 'power2.out'
      });

      ScrollTrigger.batch('.fade-in-section', {
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, duration: 1 }),
        start: 'top 80%',
      });

      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-white font-sans">
        <MouseFollower />
        <Header />
        <div className="flex flex-col md:flex-row p-5 md:p-10 gap-10">
          <Sidebar />
          <MainContent />
        </div>
        <AboutMe className="fade-in-section" />
        <Experience className="fade-in-section" />
        <Skills className="fade-in-section" />
        <Projects className="fade-in-section" />
        <Contact className="fade-in-section" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
