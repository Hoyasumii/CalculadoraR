// React Imports
import PropTypes from 'prop-types';

// CSS imports
import module from './styles.module.css';

export default function Button({ children, onclick, redText=false, fullBlue=false }) {
    return (
        <button className={` ${ redText ? module.redText : null } ${ module.button } ${ fullBlue ? module.fullBlue : null } `} onClick={ onclick }>{ children }</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    redText: PropTypes.bool,
    fullBlue: PropTypes.bool
}