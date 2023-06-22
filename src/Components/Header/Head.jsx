import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./logo.png"
const Head = () => {
  
  return (
      <>
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
  <h1 className="logo me-auto"><NavLink to=""><img src={logo}></img></NavLink></h1>
  <NavLink to="/" className="logo me-auto">
    {/* <img src="assets/img/logo.png" alt="" className="img-fluid" /> */}
  </NavLink>
  <nav id="navbar" className="navbar order-last order-lg-0">
    <ul>
      <li><NavLink to="/" className="active">Home</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
      <li><NavLink to="/trainers" >Trainers</NavLink></li>
      <li><NavLink to="/events" >Events</NavLink></li>
      <li><NavLink to="/pricing" >Pricing</NavLink></li>
      <li><NavLink to="/contact" >Contact</NavLink></li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle" />
  </nav>
  <NavLink to="/login" className="get-started-btn">Login</NavLink>
</div>

  </header>

      </>
  )
}

export default Head