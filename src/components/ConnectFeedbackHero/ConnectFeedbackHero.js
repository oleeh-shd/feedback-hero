import React from "react";
import {TextField} from "../TextField/TextField";
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import {Image} from "../Image/Image";
import connect from "../../assets/images/connectFeedbackHero/connect.svg";
import styles from "./ConnectFeedbackHero.module.scss";

export const ConnectFeedbackHero = () => {

    return (
        <div className={styles.container}>
            <div>
                <TextField text="sing up" textClass="textIdentifyingBlock"/>
            </div>
            <div className={styles.wrapperTitle}>
                <div>
                    <Title title="Connect your business to FeedbackHero" titleClass="titleThirdBlock"/>
                    <div className={styles.wrapperText}>
                        <TextField text="Do you have any questions?"/>
                        <br/>
                        <TextField
                            text="Leave a request, our manager will contact you in a few minutes and tell
                        you about all the possibilities of FeedbackHero for your business."
                        />
                    </div>
                    <div className={styles.wrapperBtn}>
                        <Button btnClass="btnBlack">Sing up</Button>
                        <Button btnClass="btnRequest">Leave a request</Button>
                    </div>
                </div>
            </div>
            <div>
                <Image src={connect} alt="connect" imageClass="imgConnect"/>
            </div>
        </div>
    );
};


