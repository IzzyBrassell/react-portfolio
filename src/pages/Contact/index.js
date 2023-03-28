import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Contact Info</Card.Title>
        <Card.Text>Phone Number: 770-840-5210</Card.Text>
        <Card.Text>Email: Israel.Brassell@gmail.com</Card.Text>
        <Button variant="outline-secondary" href='https://github.com/IzzyBrassell'>Github Link</Button>
      </Card.Body>
    </Card>
  );
}

export default Contact