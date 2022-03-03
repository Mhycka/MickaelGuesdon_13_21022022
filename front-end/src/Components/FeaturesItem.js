import React from 'react'
import propTypes from 'prop-types'



/**
 * Display features item
 * @param {string} picture
 * @param {string} pictureAlt
 * @component
 */


export default function FeaturesItem({ picture, pictureAlt, children }) {
    return (
        <div className="features-item">
            <img src={picture} alt={pictureAlt || ''} className="features-item-image" />
            {children}
        </div>
    )
}


FeaturesItem.propTypes = {
    picture: propTypes.string,
    pictureAlt: propTypes.string,
}