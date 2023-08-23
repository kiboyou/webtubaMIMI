import React from "react";


export default function Title({title}) {

    return (
            <div className="title">
                    <div className="title-wrapper">
                        <h2>{title}</h2>
                        <span></span>
                    </div>
            </div>
        )
}