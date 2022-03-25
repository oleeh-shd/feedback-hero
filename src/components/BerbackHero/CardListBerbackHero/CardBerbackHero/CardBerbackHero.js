import React from "react";
import PropTypes from "prop-types";
import {Image} from "../../../Image/Image";
import {Title} from "../../../Title/Title";
import {TextField} from "../../../TextField/TextField";
import styles from "./CardBerbackHero.module.scss";

export const CardBerbackHero = ({
                                    image = "",
                                    text = "",
                                    description = "",
                                    title = ""
                                }) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperImg}>
                <Image src={image} imageClass="imgCardBerbackHero"/>
            </div>
            <Title title={title} titleClass="titleCardHero"/>
            <TextField text={description} textClass="textIdentifyingBlock"/>
            <div className={styles.wrapperText}>
                <TextField text={text} textClass="cardsFeedback"/>
            </div>
        </div>
    );
};

CardBerbackHero.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
}

