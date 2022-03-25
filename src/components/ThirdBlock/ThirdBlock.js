import React from "react";
import {TextField} from "../TextField/TextField";
import {Title} from "../Title/Title";
import {Image} from "../Image/Image";
import imgOne from "../../assets/images/thirdBlock/block3_one.svg";
import imgTwo from "../../assets/images/thirdBlock/block3_two.svg";
import {Button} from "../Button/Button";
import styles from "./ThirdBlock.module.scss";

export const ThirdBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperFirstSection}>
                <div className={styles.wrapperText}>
                    <TextField text="Easy to use" textClass="textIdentifyingBlock"/>
                    <div className={styles.wrapperTitle}>
                        <Title title="How it works?" titleClass="titleThirdBlock"/>
                    </div>
                    <TextField
                        text="We generate a QR code and a short link. Then you offer it to visitors
                        (leave stickers on the table, print on table awnings, send by e-mail) and get feedback."
                    />
                    <div className={styles.paragraph}>
                        <TextField
                            text="Through a personal account you will be able to collect statistics
                            of the received comments and to do mailing."
                        />
                    </div>
                </div>
                <Image src={imgOne}/>
            </div>
            <div className={styles.wrapperSecondSection}>
                <Image src={imgTwo}/>
                <div className={styles.wrapperText}>
                    <TextField text="Who’ll benefit?" textClass="textIdentifyingBlock"/>
                    <div className={styles.wrapperTitle}>
                        <Title title="Fits to any business" titleClass="titleThirdBlock"/>
                    </div>
                    <TextField
                        text="FeedbackHero is effective in diferrent areas of business: restaurants, hotels, E-commerce,
                        Auto service, Auto salons & Lease, Beauty & Cosmetics and other business areas"
                    />
                    <Button btnClass="btnThirdBlock">Start using</Button>
                </div>
            </div>
        </div>
    );
};
