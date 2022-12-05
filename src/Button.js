import React from 'react'

const Button = ({ children, handleClick, className, type, fontColor, color, radius, width, padding, border }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={handleClick}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                padding,
                width,
                color: fontColor,
            }}
        >
            {children}
        </button>
    )
}

export default Button
