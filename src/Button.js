import React from 'react'

const Button = ({ children, handleClick, className, type, fontColor, color, radius, width, padding, border }) => {
    return (
        <button
            onClick={handleClick}
            className={className}
            type={type}
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