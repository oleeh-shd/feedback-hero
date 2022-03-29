import React from "react";
import {TextField} from "../TextField/TextField";
import {Title} from "../Title/Title";
import {Image} from "../Image/Image";
import photoClient from "../../assets/images/ourClients/photo_client.svg";
import quotes from "../../assets/images/ourClients/quotes.svg";
import {Button} from "../Button/Button";
import {cardCompanies} from "../../lists/cardCompanies";
import {CompaniesCard} from "./CompaniesCard/CompaniesCard";
import styles from "./OurClients.module.scss";
import {Arrow} from "../Arrow/Arrow";

export const OurClients = () => {

    return (
        <div className={styles.container}>
            <div className={styles.feedbackClient}>
                <div className={styles.wrapperFirstSection}>
                    <div className={styles.wrapperFirstTextField}>
                        <TextField text="our clients" textClass="textIdentifyingBlock"/>
                    </div>
                    <div className={styles.wrapperTitle}>
                        <Title title="We are trusted" titleClass="titleThirdBlock"/>
                    </div>
                </div>
                <div className={styles.wrapperFeedback}>
                    <Image src={photoClient} alt="photo_client" imageClass="imgClient"/>
                    <div className={styles.wrapperQuotes}>
                        <Image src={quotes} alt="quotes" imageClass="imgQuotes"/>
                    </div>
                    <div className={styles.wrapperTextField}>
                        <TextField
                            text="Some text with rewiev from client Some text with rewiev from client.
                            Some text with rewiev from client Some text with rewiev from client .
                            Some text with rewiev from client Some text with rewiev from client/"
                        />
                        <div className={styles.descriptionClient}>
                            <Title title="Alberto Coltraliano, CEO" titleClass="nameClient"/>
                            <TextField text="Hilton Corporation Ltd" textClass="titleCompanyFeedback"/>
                        </div>
                        <div className={styles.wrapperBtn}>
                            <Button btnClass="btnTransparentRing">
                                <Arrow/>
                            </Button>
                            <div className={styles.wrapperBtnPainted}>
                                <Button btnClass="btnPaintedRing">
                                    <Arrow arrowClass="arrowRight"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperCompaniesJoined}>
                <div className={styles.wrapperSecondTitle}>
                    <Title title="Companies that have already joined us" titleClass="titleThirdBlock"/>
                </div>
                <div className={styles.containerCardCompanies}>
                    {cardCompanies.map(({image, id}) => (
                        <CompaniesCard
                            key={id}
                            image={image}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};
