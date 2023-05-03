import React from "react";

export const Tour = ({img, date, title, text, icon, destination,length, price}) =>
{
    return(
        <article className="tour-card">
            <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
            <div className="tour-title">
                <h4>{title}</h4>
            </div>
            <p>
                {text}
            </p>
            <div className="tour-footer">
                <p>
                <span><i className={icon}></i></span> {destination}
                </p>
                <p>{length}</p>
                <p>{price}</p>
            </div>
            </div>
        </article>
    )
}