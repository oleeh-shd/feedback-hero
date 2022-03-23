import React from "react";
import {Title} from "../Title/Title";
import {Image} from "../Image/Image";
import score from "./../../assets/images/customer_score.svg";
import {TextField} from "../TextField/TextField";
import {Button} from "../Button/Button";
import styles from "./FirstBlock.module.scss";

export const FirstBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperTitle}>
                <TextField text="Your Business Superhero" textClass="textIdentifyingBlock"/>
                <Title title="Time is money, reviews is a growing business" titleClass="titleFirstBlock"/>
                <TextField
                    text="The best tool for user satisfaction research, feedback, market research and analytics."
                    textClass="descriptionFirstBlock"/>
                <Button btnClass="btnFirstBlock">Try now</Button>
            </div>
            <div className={styles.wrapperImg}>
                <Image src={score} alt="customer_score" imageClass="imgFirstBlock"/>
            </div>
        </div>
    );
};

