import React from "react";
import PropTypes from "prop-types";
import {Image} from "../../Image/Image";
import {Title} from "../../Title/Title";
import {TextField} from "../../TextField/TextField";
import styles from "./CardFeedback.module.scss";

export const CardFeedback = ({image, title, text}) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperCard}>
                <div className={styles.img}>
                    <Image src={image} imageClass="imgCardsFeedback"/>
                </div>
                <Title title={title} titleClass="titleCardsFeedback"/>
                <div className={styles.line}/>
                <div className={styles.text}>
                    <TextField text={text} textClass="cardsFeedback"/>
                </div>
            </div>
        </div>
    );
};

CardFeedback.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

CardFeedback.defaultProps = {
    image: "",
    title: "",
    text: ""
}
