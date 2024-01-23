import React from 'react';
import Welcome from './components/welcome/welcome';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
