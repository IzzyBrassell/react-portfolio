
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  AboutMe  from './pages/AboutMe';
import  Contact  from './pages/Contact'
import  Projects  from './pages/Projects'
import  Resume  from './pages/Resume'
import TopOfPage from './components/Header';
import CMS from './assets/images/CMS.png';
import StreamersDen from './assets/images/StreamersDen.png';
import Gamemap from './assets/images/Gamemap.png';
import EmployeeBlog from './assets/images/EMPblog.png'
import Header from './components/Header';



const projects = [
    {
        title: `Streamer's Den`,
        imageUrl: StreamersDen,
        resources: 'HMTL, JS, CSS, Youtube Iframe API',
        description: 'A Streamer website where they can more easily control what content their fans see',
        githubURI: 'https://github.com/IzzyBrassell/iCarly-project-1', 
    },
     {
        title: `Fortress Defense`,
        imageUrl: Gamemap,
        resources: 'HMTL, JS, CSS, Node, Express, Sequelize',
        description: 'A Tower Defense Video Game that will soon have the feature to save High Scores and view a Leaderboard',
        githubURI: 'https://github.com/IzzyBrassell/Fortress-Defense', 
    },
     {
        title: `Employee Blog`,
        imageUrl: EmployeeBlog,
        resources: 'JS, Express, Handlebars, Sequelize',
        description: 'An Employee only blogsite to look at posts and make posts with other employees',
        githubURI: 'https://github.com/IzzyBrassell/Employee-blog', 
    },
     {
        title: `Employee CMS`,
        imageUrl: CMS,
        resources: 'Node, Express, MySQL',
        description: '',
        githubURI: 'https://github.com/IzzyBrassell/CMS', 
    },
     {
        title: `This Portfolio`,
        imageUrl: '',
        resources: 'React, Node',
        description: '',
        githubURI: 'https://github.com/IzzyBrassell/react-portfolio', 
    }
]

function App() {
  return (
    <Router>
      <TopOfPage /> 
       
        <Routes>
        <Route element={<AboutMe/>}/>
        <Route path="/Aboutme" element={<AboutMe/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Projects" element={<Projects projects={projects} />} />
        <Route path='/Resume' element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;
