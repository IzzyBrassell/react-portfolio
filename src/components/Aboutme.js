import React from "react";
import { Container } from "react-bootstrap";

const birthdatestring = '1996-09-24'

const birthdate = new Date(birthdatestring)

let agediffmonths = Date.now() - birthdate.getTime()

let agedate = new Date(agediffmonths)
let age = Math.abs(agedate.getUTCFullYear() - 1970)

new function aboutMe() {
    return(
        <Container fluid className="p-5 bg-dark text-white">
        <h1 className="display-4">About Me</h1>
        <p className="lead">This is a simple Jumbotron component for React Bootstrap.</p>
      </Container>
    );
}