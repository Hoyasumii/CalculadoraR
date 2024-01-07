// React imports
import PropTypes from 'prop-types';

// CSS imports
import module from './styles.module.css';

export default function Display({ children }) {
    return (
        <div className={ module.display }>
            { children }
        </div>
    )
}

Display.propTypes = {
    children: PropTypes.string.isRequired
}