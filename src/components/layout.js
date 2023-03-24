import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AboutMe } from './Aboutme'
import { Contact } from './contact'
import { Projects } from './projects'
import { Resume } from './resume'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


new function Layout() {
 
    return(
    <html>
        <head>
        <title>Izzy's Portfolio</title>
        </head>
        <body style={{ backgroundColor: '#42042094' }} >
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
       
       
        <Switch>
        <Route path="/Aboutme"><AboutMe /></Route>
        <Route path="/Contact"><Contact /></Route>
        <Route path="/Projects"><Projects /></Route>
        <Route path='/Resume'><Resume /></Route>
      </Switch>
        </body>
    </html>
    )
}

export default Layout;