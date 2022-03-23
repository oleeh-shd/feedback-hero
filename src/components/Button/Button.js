import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const Button = ({children, onClick, btnClass, id}) => {

    return (
        <button
            type='button'
            className={`${styles.btnPrimary} ${btnClass ? styles[btnClass] : ''}`}
            onClick={onClick}
            id={id}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    btnClass: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string
};

Button.defaultProps = {
    children: '',
    btnClass: '',
    id: '',
    onClick: () => {
    }
};
