import React from "react";
import styles from "./FeedbackHeroInNumbers.module.scss";
import {TextField} from "../TextField/TextField";
import {Title} from "../Title/Title";

export const FeedbackHeroInNumbers = () => (

    <div className={styles.container}>
        <div className={styles.wrapperTitle}>
            <div className={styles.wrapperIdentifying}>
                <TextField text="our service is" textClass="textIdentifyingBlock"/>
            </div>
            <div className={styles.wrapperText}>
                <Title title="FeedbackHero in Numbers" titleClass="titleThirdBlock"/>
                <div className={styles.wrapperTitleText}>
                    <TextField text="The FeedbackHero is growing right now and getting more and more every day."/>
                    <br/>
                    <TextField text="Join our service now!"/>
                </div>
            </div>
        </div>
        <div className={styles.containerNumbers}>
            <div className={styles.wrapperNumbers}>
                <TextField text="1000+" textClass="textFeedbackNumbers"/>
                <TextField text="Reviews every day"/>
            </div>
            <div className={styles.wrapperNumbers}>
                <TextField text="550+" textClass="textFeedbackNumbers"/>
                <TextField text="Trades connected"/>
            </div>
            <div className={styles.wrapperNumbers}>
                <TextField text="240+" textClass="textFeedbackNumbers"/>
                <TextField text="Companies we serve"/>
            </div>
        </div>
    </div>
);

