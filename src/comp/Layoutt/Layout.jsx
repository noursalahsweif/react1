import React, { Component } from 'react'
import Navbarr from '../Navbarr/Navbarr'
import Footer from '../Footer/Footer'
import Home from '../Homee/Home'
import { Outlet } from 'react-router-dom'
import About from '../about/About'
import Port from '../port/Port'
import Contact from '../contact/Contact'

export default class Layout extends Component {
  render() {
    return <>
    <Navbarr/>
    <Outlet/>
    <Footer/>
    
    </>
  }
}
