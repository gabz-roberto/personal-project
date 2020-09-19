import React from 'react'
import './Button.css'

// Procurar icones melhores
const Styles = [
    'btn--primary',
    'btn--outline'
]

const Sizes = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const OkButtonStyle = Styles.includes(buttonStyle) ?
    buttonStyle : Styles[0]

    const OkButtonSize = Styles.includes(buttonStyle) ?
    buttonSize : Sizes[0]

    return(
        <button className={`bnt ${OkButtonStyle} ${OkButtonSize}`} onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}