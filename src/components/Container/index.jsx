// React imports
import PropTypes from 'prop-types';

// CSS imports
import module from './styles.module.css';

export default function Container({ children }) {
    return (
        <div className={ module.container }>
            { children }
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}