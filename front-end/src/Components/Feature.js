import React from 'react'
import propTypes from 'prop-types'


/**
 * Display features
 * @param {string} srTitle
 * @component
 */


export default function Features({ srTitle, children }) {
    return (
        <section className="features">
            {srTitle && <h2 className="sr-only">{srTitle}</h2>}
            <div className="features-grid">
                {children}
            </div>
        </section>
    )
}

Features.propTypes = {
    srTitle: propTypes.string,
}