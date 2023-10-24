import React from 'react';
import '../styles/Header.scss'

export const Header = ({ baseAmount }) => {
    return (
        <div className='header'>
            <h1 className='header-title'>Converter</h1>
            <p className='header-amount'>{baseAmount}</p>
        </div>
    )
}