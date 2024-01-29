import React from 'react';
import Welcome from './components/welcome/welcome';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <Education />
        <Experience />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
