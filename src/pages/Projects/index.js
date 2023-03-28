import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Projects = (props) => {
  const projectCards = [];

  for (let i = 0; i < props.projects.length; i++) {
    const project = props.projects[i];

    projectCards.push(
      <Card key={i} className="bg-dark text-white" style={{display: 'flex', flexDirection: 'row'}}>
        <Card.Img variant='top' style= {{height: '300px', width: '533px'}} src={project.imageUrl} alt={project.title} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.resources}</Card.Text>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>{project.githubURI}</Card.Text>
          </Card.Body>
      </Card>
    );
  }

  return projectCards;
}

export default Projects