import React from "react";
import "../../../index.css";
import { PageLinksComponent } from "../PageLinks/PageLinksComponent";
import { SocialLinksComponent } from "../SocialLinks/SocialLinksComponent";

export const Footer = props =>
{
    return (
        <footer className="section footer">

            <PageLinksComponent listClass="footer-links" linkClass="footer-link"/>
            <SocialLinksComponent ulClass="footer-icons" />
            
            <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">
                {
                   new Date().getFullYear()
                }    
            </span> all rights reserved
            </p>
        </footer>
    )
}