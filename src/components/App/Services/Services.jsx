import React from "react";
import "../../../index.css";
import { Title } from "../Title/Title";
import { ServicesList } from "../Data/Data";
import { Service } from "../Service/Service";

export const Services = props =>
{
    return(
        <section className="section services" id="services">

            <Title title={{partOne: 'Our', partTwo: 'Services'}}/>

            <div className="section-center services-center">
                {
                    ServicesList.map(service => {
                        return <Service key={service.id} {...service}/>
                    })
                }
            </div>
        </section>
    )
}