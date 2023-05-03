import React from "react";
import "../../../index.css";
import logo from '../../../images/logo.svg';
import { PageLinksComponent } from "../PageLinks/PageLinksComponent";
import { SocialLinksComponent } from "../SocialLinks/SocialLinksComponent";

export const Navbar = props =>
{
    return(
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <PageLinksComponent listClass="nav-links" linkClass="nav-link" />
          <SocialLinksComponent ulClass="nav-icons"/>
        </div>
      </nav>
    )
}