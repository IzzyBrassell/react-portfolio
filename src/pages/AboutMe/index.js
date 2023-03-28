import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePicture from './../assets/images/PP.jpg';

const birthdatestring = '1996-09-24'

const birthdate = new Date(birthdatestring)

let agediffmonths = Date.now() - birthdate.getTime()

let agedate = new Date(agediffmonths)
let age = Math.abs(agedate.getUTCFullYear() - 1970)

const AboutMe = () => {
  return(
      <Container fluid className="p-5 bg-dark text-white">
        <article className="container d-inline-flex ">
          <div className="d-inline-flex flex-column">
            <h1 className="display-4 justify-content-start" id="Aboutme">About Me</h1>
            <p className="lead">I am a {age} year old learning Full Stack Development at Georgia Tech's Coding Bootcamp. I am proficient in HTML, CSS, Javascript, Node.js, Mern, React, MySQL, Handlebars and NoSQL. In my free time I enjoy playing Videogames and DND. I was in the Restaurant industry for 8 years with 2 years as Management before I decided to switch to web development. My projects will be updated as they are completed</p>
          </div>
          <img src={ProfilePicture} className="rounded float-right w-25 h-25 justify-content-end custom-img" alt="Just imagine I look cool" />
        </article>
      </Container>
  );
}

export default AboutMe;

