import React from 'react'
import './Button.css'

const Button = ({ name, onClick, className='' }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>{name}</button>
    )
}
 
export default Button