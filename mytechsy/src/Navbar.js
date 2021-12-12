import { NavLink,Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'

const Navigation = () => {

  // Toggle .header-scrolled class to #header when page is scrolled
  const [scrollTop, setScrollTop] = useState(false)
  const [show, setShow] = useState(false)
  const history = useHistory();

const changeBackground = () =>{
  if(window.scrollY >= 100){
    setScrollTop(true)
  }else{
    setScrollTop(false)
  }
}

const mobileNav = ()=>{
  if(show){
    setShow(false)
  }else{
    setShow(true)
  }
}

window.addEventListener('scroll',changeBackground)


const user = JSON.parse(localStorage.getItem('user_info'))


function logout(){
  localStorage.clear();
  window.location.reload();
}

function profile(){
  if(user){
    history.push("/user_profile");
  }else{    
    history.push("/");
  }
}

    return (
        <>
         {/* ======= Header ======= */}
  <header id="header" className={`${scrollTop ? 'fixed-top header-scrolled' : 'fixed-top'}`}>
    <div class="container d-flex align-items-center justify-content-lg-between">

      <h1 class="logo me-auto me-lg-0"><a href="/"><span>T</span>echSy</a></h1>
      
      <nav id="navbar" className={`navbar order-last order-lg-0 ${show ? 'navbar-mobile' : ''}`}>
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto " href="#pricing">Price</a></li>
          <li><a class="nav-link scrollto " href="#faq">FAQ</a></li>
          
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>

        {
          localStorage.getItem("user_info") ?
          <Nav>
            <NavDropdown title={user.data.user.name}>
            <NavDropdown.Item style={{
              color : '#201F22'
            }} onClick={logout}>Logout</NavDropdown.Item>
            <NavDropdown.Item style={{
              color : '#201F22'
            }} onClick={profile} target="_blank">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>          
    :
    <>
    <li><Link class="nav-link scrollto" to="/register">Register</Link></li>
    <li><Link class="nav-link scrollto" to="/login">Login</Link></li>
</>
        }

        </ul>
        <i class="bi bi-list mobile-nav-toggle" data-aos="fade-down" onClick={mobileNav}></i>
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}

        </>
    )
}

export default Navigation
