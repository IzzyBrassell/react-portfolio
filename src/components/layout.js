import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AboutMe } from './Aboutme'
import { Contact } from './contact'
import { Projects } from './projects'
import { Resume } from './resume'

new function Layout() {
    <html>
        <head>

        </head>
        <body>
       
       
       
        <Switch>
        <Route path="/Aboutme"><AboutMe /></Route>
        <Route path="/Contact"><Contact /></Route>
        <Route path="/Projects"><Projects /></Route>
        <Route path='/Resume'><Resume /></Route>
      </Switch>
        </body>
    </html>
}