import React, { Component,useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {Link as RouterLink} from 'react-router-dom';

export default class Navbar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    handleSetActive= (to)=> {
        console.log(to);
      }

  render() {
    return (
      <div className="navbar-item">
        <RouterLink
          to="/"
          className="heading"
          onSetActive={this.handleSetActive}
        >
          KU Printing Service
        </RouterLink>

        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="home"
          
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="about"
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="service"
        >
          Service
        </Link>
      
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="openingHours"
        >
          Opening Hours
        </Link>
        <Link
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="contact"
        >
          Contact
        </Link>
      </div>
    );
  }
}
