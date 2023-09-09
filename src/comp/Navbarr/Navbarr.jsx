import React, { Component } from 'react'
import style from './Navbarr.module.css'
import { NavLink } from 'react-router-dom'

export default class Navbarr extends Component {
  render() {
    return <>

<nav className={ style.navbg + " navbar navbar-expand-lg navbar-light fixed-top navbg"}>
  <div className="container p-3">
    <NavLink className={"navbar-brand text-white fs-1 fw-bold"} to="home">START FRAMEWORK</NavLink>
    <div className="collapse navbar-collapse text-white fw-bold fs-5" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive==true? " nav-link text-white activ":"nav-link text-white" } to="about">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive==true ?" nav-link text-white activ" :"nav-link text-white" } to="port">portfolio</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=> isActive== true?" nav-link text-white activ":" nav-link text-white "} to="contact">contact</NavLink>
        </li>
    </ul>
    </div>
  </div>
</nav>
    </>
  }
}
