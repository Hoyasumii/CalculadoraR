// React imports
import PropTypes from 'prop-types';

export default function Icon({ name }) {
    return (
        <i className={ `bi bi-${ name }` }></i>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired
}