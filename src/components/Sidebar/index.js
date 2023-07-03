import React from "react";
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPerson } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className="sub-logo" src={LogoSubtitle} alt='salmaan' />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
          <FontAwesomeIcon icon={faPerson} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar;