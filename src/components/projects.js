import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Projects = (props) => {
  const projectCards = [];

  for (let i = 0; i < props.projects.length; i++) {
    const project = props.projects[i];

    projectCards.push(
      <Card key={i} className="bg-dark text-white">
        <Card.Img src={project.imageUrl} alt={project.title} />
        <Card.ImgOverlay>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.resources}</Card.Text>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>{project.githubURI}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
  }

  return projectCards;
}

export default Projects