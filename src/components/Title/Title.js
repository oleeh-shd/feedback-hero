import React from "react";
import styles from "./Title.module.scss";
import PropTypes from "prop-types";

export const Title = ({title, titleClass}) => (

    <h1 className={`${styles.title} ${titleClass ? styles[titleClass] : ''}`}>
        {title}
    </h1>
);

Title.defaultProps = {
    titClass: '',
    title: ''
};

Title.propTypes = {
    title: PropTypes.string,
    titClass: PropTypes.string
};
