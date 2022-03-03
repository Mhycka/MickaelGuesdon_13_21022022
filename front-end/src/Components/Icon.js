import React from 'react'
import propTypes from 'prop-types'

/**
 * Icon doc
 * @component
 * @param {Object} props
 * @param {String} props.name
 */


export default function Icon({name}) {
    return (
        <i className={'fa fa-' + name} />
    )
}


Icon.propTypes = {
    name: propTypes.string.isRequired,
}