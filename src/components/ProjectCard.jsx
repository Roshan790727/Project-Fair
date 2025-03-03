import React from 'react'
import { Card } from 'react-bootstrap'


const ProjectCard = () => {
  return (
    <div>  
       <Card className='shadow btn'>
    <Card.Img height={'200px'} variant="top" src="https://img.freepik.com/premium-vector/dextope-table-silhouette-vector-white-background_1165070-465.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
    </Card.Body>
  </Card>
  </div>
  )
}

export default ProjectCard