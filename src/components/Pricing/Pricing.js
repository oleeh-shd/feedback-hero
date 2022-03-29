import React from "react";
import {TextField} from "../TextField/TextField";
import {Title} from "../Title/Title";
import {CardPricingList} from "./CardPricingList/CardPricingList";
import styles from "./Pricing.module.scss";

export const Pricing = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperPrice}>
                <div>
                    <TextField text="Pricing" textClass="textIdentifyingBlock"/>
                </div>
                <div className={styles.wrapperTitle}>
                    <Title title="We have prepared ideal solutions for your business" titleClass="titleThirdBlock"/>
                    <div className={styles.wrapperDescription}>
                        <TextField text="Small or medium business, or even enterprise:"/>
                        <br/>
                        <TextField text="choose your format of work with feedback and NPS!"/>
                    </div>
                </div>
            </div>
            <div>
                <CardPricingList/>
            </div>
        </div>
    );
};

