import React from "react";
import {CardFeedback} from "./CardFeedback/CardFeedback";
import {cardsFeedback} from "../../lists/cardsFeedback";
import styles from "./CardFeedbackList.module.scss";

export const CardFeedbackList = () => {

    return (
        <div className={styles.container}>

            {
                cardsFeedback.map(card => (
                    <CardFeedback
                        key={card.id}
                        text={card.text}

                        image={card.image}
                        title={card.title}
                    />
                ))
            }
        </div>
    );
};

