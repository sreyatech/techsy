import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user_info'))
    const history = useHistory();

    const logout = () =>{
        localStorage.clear();
        window.location.reload();
        history.push("/")
    }



return (
<>
    {/* Header */}
    <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                {/* <img src="user_admin/assets/img/logo.png" alt="" /> */}
                <span class="d-none d-lg-block">TechSy</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/* End Logo */}

        <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div>
        {/* End Search Bar */}

        <nav class="header-nav ms-auto mr-5">
            <ul class="d-flex align-items-center">              
                    <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="user_admin/assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" />
                    </a>
                <NavDropdown title={user && user.data.user.name}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                    </NavDropdown>

            </ul>
        </nav>

    </header>
    {/* End Header */}



    {/* Sidebar */}
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <Link class="nav-link " to="/user_dashboard">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* End Dashboard Nav */}


            <li class="nav-heading">Pages</li>

            <li class="nav-item">
                <Link class="nav-link collapsed" to="/user_history_profile">
                    <i class="bi bi-person"></i>
                    <span>Profile</span>
                </Link>
            </li>
            {/* End Profile Page Nav */}

            <li class="nav-item">
                <Link class="nav-link collapsed" to="/user_faq">
                    <i class="bi bi-question-circle"></i>
                    <span>F.A.Q</span>
                </Link>
            </li>
            {/* End F.A.Q Page Nav */}

            <li class="nav-item">
                <Link class="nav-link collapsed" to="/user_contact">
                    <i class="bi bi-envelope"></i>
                    <span>Contact</span>
                </Link>
            </li>
            {/* End Contact Page Nav */}

            <li class="nav-item">
                <Link class="nav-link collapsed" to="/user_service">
                    <i class="bi bi-card-list"></i>
                    <span>Service history</span>
                </Link>
            </li>
            {/* End service history Page Nav */}

            <li class="nav-item">
                <Link class="nav-link collapsed" to="/user_service_status">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span>Service Status</span>
                </Link>
            </li>
            {/* End service status Page Nav */}


        </ul>

    </aside>

    {/* End Sidebar */}



</>
)
}

export default Profile