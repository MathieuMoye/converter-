import React from "react";
import '../styles/Amount.scss'

export const Amount = ({ value, currency }) => {
    return (
        <div className="amount">
            <p className="amount-value">{ value }</p>
            <p className="amount-currency">{ currency }</p>
        </div>
    )
}