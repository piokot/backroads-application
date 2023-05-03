import React from "react";
import { SocialLinks } from "../Data/Data";
import { SocialLinkComponent } from "./SocialLinkComponent";

export const SocialLinksComponent = ({ulClass})=>
{
    return (          
        <ul className={ulClass}>
            {
            SocialLinks.map(link =>{
                return <SocialLinkComponent {...link} linkClass="nav-icon" key={link.id}/>
            })
            }
        </ul>)
    }