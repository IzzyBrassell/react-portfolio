
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
import Portfolio from './assets/images/Portfolio.png'
import CodeMonsters from './assets/images/Codemonsters.png'


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
        resources: 'Node, Express, MySQL, inquirer',
        description: 'Inquirer/node based CMS application that manages employees in a Mysql database',
        githubURI: 'https://github.com/IzzyBrassell/CMS', 
    },
     {
        title: `This Portfolio`,
        imageUrl: Portfolio,
        resources: 'React, Node',
        description: 'Portfolio made only using React, React-Router, and React-bootstrap',
        githubURI: 'https://github.com/IzzyBrassell/react-portfolio', 
    },
    {
      title: 'Code Monsters',
      imageUrl: CodeMonsters,
      resources: 'Full MERN Stack Application using Mongo, Express, React and Node to run the site alongside using React-Bootstrap to design the site',
      description: 'Text Adventure site with authentication, a Save/Load functionality and Character Creation',
      githubURI: 'https://github.com/IzzyBrassell/code-monsters'

    }
]

function App() {
  return (
    <Router>
      <TopOfPage /> 
       
        <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path="/Aboutme" element={<AboutMe/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Projects" element={<Projects projects={projects} />} />
        <Route path='/Resume' element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;
