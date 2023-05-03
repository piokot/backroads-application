import React from "react";

export const Title = props =>
{

    const {...title} = props.title;

    return (
        <div className="section-title">
            <h2>{title.partOne} <span>{title.partTwo}</span></h2>
        </div>
    )
}