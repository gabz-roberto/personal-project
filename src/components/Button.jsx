import React from 'react'
import './Buttom.css'

// Procurar icones melhores
const Styles = [
    'btn--primary',
    'btn--outline'
]

const Sizes = [
    'btn--medium',
    'btn--large'
]

export const Buttom = ({
    children,
    type,
    onClick,
    buttonStyle,
    butotnSize
}) => {
    const OkButtomStyle = Styles.includes(buttonStyle) ?
    buttonStyle : Styles[0]

    const OkButtomSize = Styles.includes(buttonStyle) ?
    butotnSize : Sizes[0]

    return(
        <button className={`bnt ${OkButtomStyle} ${OkButtomSize}`} onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}