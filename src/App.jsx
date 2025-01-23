import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Findme from "./Components/Findme";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/findme" element={<Findme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
