import React from "react";
import { PageLinks } from "../Data/Data";

export const PageLinksComponent = ({listClass, linkClass})=>
{
    return(
        <ul className={listClass}>
            {
                PageLinks.map(link=>
                    {
                        const {href, text, id} = link;
                        return <a key={id} className={linkClass} href={href}>{text}</a>
                    })
            }
        </ul>
    )
}