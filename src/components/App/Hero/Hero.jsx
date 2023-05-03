import React from "react";
import "../../../index.css";

export const Hero = props =>
{
    return(
        <section className="hero" id="home">
            <div className="hero-banner">
            <h1>Backroads App</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                explicabo debitis est autem dicta.
            </p>
            <a href="#tours" className="btn hero-btn">explore tours</a>
            </div>
        </section>
    )
}