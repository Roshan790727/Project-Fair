import React from 'react'
import landing from '../assets/landing.jpg'
import Profile from '../assets/Profile.png'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'


const Home = () => {
  return (
    <>
    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
          <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i> Project Fair</h1>
          <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where user can add and manage their Projects.</p>
          <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src={landing} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='my-5 text-center'>
      <h1 className="mb-5">Explore Our Projects</h1>
      <marquee>
        <div className="d-flex">
          <div className="me-5">
            <ProjectCard/>
          </div>
        </div>
      </marquee>
      <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
    </div>
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>Our Testimonials</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'><img width={'80px'} src={Profile} alt="" /><span>Max Miller</span>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          <p style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quibusdam consequatur culpa eaque nostrum mollitia? Minus iusto quod veniam voluptas rerum exercitationem. Natus sapiente saepe repellat rerum consequuntur delectus sequi.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'><img width={'80px'} src={Profile} alt="" /><span>Max Miller</span>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          <p style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quibusdam consequatur culpa eaque nostrum mollitia? Minus iusto quod veniam voluptas rerum exercitationem. Natus sapiente saepe repellat rerum consequuntur delectus sequi.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'><img width={'80px'} src={Profile} alt="" /><span>Max Miller</span>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          <p style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quibusdam consequatur culpa eaque nostrum mollitia? Minus iusto quod veniam voluptas rerum exercitationem. Natus sapiente saepe repellat rerum consequuntur delectus sequi.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      
    </div>
    </>
  )
}

export default Home