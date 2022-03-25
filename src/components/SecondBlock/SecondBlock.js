import React from "react";
import {TextField} from "../TextField/TextField";
import {Title} from "../Title/Title";
import styles from "./SecondBlock.module.scss";
import {CardFeedbackList} from "../CardFeedbackList/CardFeedbackList";

export const SecondBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperText}>
                <div className={styles.wrapperFeatures}>
                    <TextField text="Features" textClass="textIdentifyingBlock"/>
                </div>
                <div>
                    <div className={styles.title}>
                        <Title title="Why FeedbackHero?" titleClass="titleSecondBlock"/>
                    </div>
                    <div className={styles.wrapperTextDescription}>
                        <TextField
                            text="Return customers with NPS service, feedback and FeedbackHero loyalty assessment."
                        />
                    </div>
                </div>
            </div>
            <CardFeedbackList/>
        </div>
    );
};

