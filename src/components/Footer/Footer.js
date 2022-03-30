import React from "react";
import {UpperFooter} from "./UpperFooter/UpperFooter";
import {TextField} from "../TextField/TextField";
import styles from "./Footer.module.scss";

export const Footer = () => {

    return (
        <>
            <UpperFooter/>
            <footer className={styles.container}>
                <TextField text="© FeedbackHero, 2021" textClass="footer"/>
                <TextField text="All rights reserved" textClass="footer"/>
            </footer>
        </>
    );
};

