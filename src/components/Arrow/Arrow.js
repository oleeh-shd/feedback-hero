import React from "react";
import PropTypes from "prop-types";
import styles from "./Arrow.module.scss";

export const Arrow = ({arrowClass = ""}) => (

    <div className={`${styles.arrow} ${arrowClass ? styles[arrowClass] : ""}`}>
        <div/>
    </div>
);

Arrow.propTypes = {
    arrowClass: PropTypes.string
};

