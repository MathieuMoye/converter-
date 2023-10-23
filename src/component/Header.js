import React from 'react';

export const Header = ({ baseAmount }) => {
    return (
        <div>
            <h1>Converter</h1>
            <p>{baseAmount}</p>
        </div>
    )
}