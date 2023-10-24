import React from "react";
import '../styles/Currencies.scss'

export const Currencies = ({ currenciesList }) => {
    return (
        <div className="currencies">
        <p className="currencies-title">Currencies</p>
        <ul className="currencies-list">
            {
                currenciesList.map((currencyElement) => {
                 return <li className="currencies-item">{currencyElement.name}</li>
                })
            }
        </ul> 
        </div>
        
    )
}