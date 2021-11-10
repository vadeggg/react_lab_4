import React from "react";
import { NavLink } from "react-router-dom"
import { Nav } from 'react-bootstrap';
export const  Navbar =() => {


    return(
        <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><NavLink to="/profile">Profile</NavLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><NavLink to="/news">News</NavLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>
      <NavLink to="/">
        Home
      </NavLink>
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
} 
