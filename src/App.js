import React from 'react';
import Navbar from './Navigation/Navbar.js';
import Home from './Home/home.js';
import Idea from './Idea/idea.js';
import Projects from './Projects/projects.js';
import Video from './Projects/video.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import insta from './Home/insta.png';
import linkedin from './Home/linkedin.png';
import github from './Home/github.png';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/idea-board' element={<Idea />} />
        <Route path='/technical-projects' element={<Projects />} />
        <Route path='/avengers-video' element={<Video />} />
      </Routes>
      <div style={{textAlign:"center",backgroundColor:"#212529",color:"white",borderTop:"1px solid white"}}>
          <p style={{paddingTop:"30px"}}>&#169; 2022 Alyssa Choi</p>
          <div style={{paddingBottom:"30px", display: "flex", justifyContent: "center"}} class="logos">
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alychoi123/">
                  <img src={insta} width=""></img>
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssa-choi-9b47a7198/">
                  <img src={linkedin} width=""></img>
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/alychoi">
                  <img src={github} width=""></img>
                </a>
              </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
