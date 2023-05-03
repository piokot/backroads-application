import React from "react";

export const SocialLinkComponent = ({linkClass, href, icon})=>
{
    return(
        <li> <a href={href} target="_blank" className={linkClass} rel="noreferrer"><i className={icon}></i></a> </li>
    )
}