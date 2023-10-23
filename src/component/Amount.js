import React from "react";

export const Amount = ({ value, currency }) => {
    return (
        <div>
            <p>{ value }</p>
            <p>{ currency }</p>
        </div>
    )
}