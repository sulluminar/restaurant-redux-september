import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispath = useDispatch()
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:"none", color:"white"}}>FOOD CIRCLE</Link></Navbar.Brand>
          <input type="text"  className='form-control w-25'
          onChange={(e)=>dispath(search(e.target.value))}
          />
          <img 
          height="50px"
          width="50px"
          src="https://img.freepik.com/premium-vector/restaurant-icon-concept-with-icon-design_24911-17835.jpg" alt="" />
        </Container>
      </Navbar>
    </>
  )
}

export default Header