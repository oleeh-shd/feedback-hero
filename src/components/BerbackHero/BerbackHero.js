import React from "react";
import {TextField} from "../TextField/TextField";
import {Title} from "../Title/Title";
import {CardListBerbackHero} from "./CardListBerbackHero/CardListBerbackHero";
import styles from "./BerbackHero.module.scss";

export const BerbackHero = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperBlock}>
                <div className={styles.wrapperQuestion}>
                    <TextField text="Why Feedbackhero?" textClass="textIdentifyingBlock"/>
                </div>
                <div className={styles.wrapperTitleDescription}>
                    <div>
                        <Title title="Create. Collect. Analyze." titleClass="titleThirdBlock"/>
                        <Title title="Connect BerbackHero today." titleClass="titleThirdBlock"/>
                    </div>
                    <div>
                        <br/>
                        <TextField
                            text="The FeedbackHero system works for the reputation of your brand."
                        />
                        <br/>
                        <TextField
                            text="You’ll see your business the way your customers see it."
                        />
                        <br/>
                        <TextField
                            text="Our surveys have already helped solve hundreds of cases, only yours is missing"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.wrapperCard}>
                <CardListBerbackHero/>
            </div>
        </div>
    );
};

