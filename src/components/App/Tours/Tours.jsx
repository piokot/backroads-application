import React from "react";
import "../../../index.css";
import { Title } from "../Title/Title";
import { Tour } from "../Tour/Tour";
import { ToursList } from "../Data/Data";

export const Tours = props =>
{
    return(
        <section className="section" id="tours">

            <Title title={{partOne: 'Featured', partTwo: 'Tours'}}/>

            <div className="section-center featured-center">
                {ToursList.map(tour=>{
                    return <Tour key={tour.id} {...tour} />
                })}        
            </div>
        </section>
    )
}