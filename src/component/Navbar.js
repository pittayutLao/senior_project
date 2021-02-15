import React, { Component,useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {Link as RouterLink} from 'react-router-dom';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Firebase from "./Firebase";

const MainHome = (props)=>{

  const onLogout =(e) =>{
      e.preventDefault();
      Firebase.auth().signOut().then(() => {
          // Sign-out successful.
          window.localtion.href = "/"
        }).catch((error) => {
          // An error happened.
        });
  }
}

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
        <div className="navbar-user">
            <DropdownButton id="dropdown" title="User">
              <Dropdown.Item>ข้อมูลส่วนตัว</Dropdown.Item>
              <Dropdown.Item>ข้อมูลคิว</Dropdown.Item>
              <Dropdown.Item>วิธีจัดส่ง/รับเอกสาร</Dropdown.Item>
              <Dropdown.Item>ชำระเงิน</Dropdown.Item>
              <Dropdown.Item>ออกจากระบบ</Dropdown.Item>
            </DropdownButton>
        </div>
        <div >
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
      </div>

      
    );
  }
}
