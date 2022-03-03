import React from 'react'
import propTypes from 'prop-types'

/**
 * Display Char
 * @param {string} srTitle
 * @component
 */


export default function Char({ srTitle, children }) {
    return (
        <div className="hero">
            <section className="hero-content">
                {srTitle && <h2 className="sr-only">{srTitle}</h2>}
                {children}
            </section>
        </div>
    )
}


Char.propTypes = {
    srTitle: propTypes.string,
}