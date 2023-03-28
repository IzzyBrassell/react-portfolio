import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutMe } from './Aboutme';
import { Contact } from './contact'
import { Projects } from './projects'
import { Resume } from './resume'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import CMS from './../assets/images/CMS.png';
import StreamersDen from './../assets/images/StreamersDen.png';
import Gamemap from './../assets/images/Gamemap.png';
import EmployeeBlog from './../assets/images/EMPblog.png'



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


const Layout = () => {
 
    return(
        <div>
       <div>
        <Navbar bg='secondary' expand='lg'>
            <Navbar.Brand>Izzy Brassell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Aboutme">About Me</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                        <Nav.Link href="/Resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
       </div>
       
       
        <Routes>
        <Route><AboutMe /></Route>
        <Route path="/Aboutme"><AboutMe /></Route>
        <Route path="/Contact"><Contact /></Route>
        <Route path="/Projects"><Projects projects={projects} /></Route>
        <Route path='/Resume'><Resume /></Route>
      </Routes>
      </div>
    )
}

export default Layout