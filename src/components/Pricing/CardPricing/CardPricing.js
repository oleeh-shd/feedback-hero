import React from "react";
import PropTypes from "prop-types";
import {TextField} from "../../TextField/TextField";
import {Title} from "../../Title/Title";
import {Button} from "../../Button/Button";
import {Image} from "../../Image/Image";
import tick from "../../../assets/images/descriptionTariff/tick.svg";
import styles from "./CardPricing.module.scss";

export const CardPricing = ({
                                tariff = "",
                                btnName = "",
                                description = "",
                                pricePerYear = "",
                                monthlyPrice = "",
                                textPriceYear = "",
                                description1 = "",
                                description2 = "",
                                description3 = "",
                                description4 = "",
                                description5 = ""
                            }) => {

    return (
        <div className={styles.container}>
            <div className={styles.containerTariff}>
                <TextField text={tariff} textClass="textTariff"/>
            </div>
            <div className={styles.containerPrice}>
                <div className={styles.wrapperPrice}>
                    <Title title={monthlyPrice} titleClass="titlePrice"/>
                </div>
                <div className={styles.wrapperPriceYear}>
                    <TextField text={pricePerYear}/>
                    <TextField text={textPriceYear} textClass="textPriceYear"/>
                </div>
            </div>
            <div className={styles.wrapperDescription}>
                <TextField text={description}/>
            </div>
            <div className={styles.wrapperTicketDescription}>
                <div>
                    <Image src={tick} imageClass="imgTick"/>
                </div>
                <div className={styles.wrapperTick}>
                    <TextField text={description1}/>
                </div>
            </div>
            <div className={styles.wrapperTicketDescription}>
                <div>
                    <Image src={tick} imageClass="imgTick"/>
                </div>
                <div className={styles.wrapperTick}>
                    <TextField text={description2}/>
                </div>
            </div>
            <div className={styles.wrapperTicketDescription}>
                <div>
                    <Image src={tick} imageClass="imgTick"/>
                </div>
                <div className={styles.wrapperTick}>
                    <TextField text={description3}/>
                </div>
            </div>
            <div className={styles.wrapperTicketDescription}>
                <div>
                    {description4 && <Image src={tick} imageClass="imgTick"/>}
                </div>
                <div className={styles.wrapperTick}>
                    <TextField text={description4}/>
                </div>
            </div>
            <div className={styles.wrapperTicketDescription}>
                <div>
                    {description5 && <Image src={tick} imageClass="imgTick"/>}
                </div>
                <div className={styles.wrapperTick}>
                    <TextField text={description5}/>
                </div>
            </div>
            <div className={styles.wrapperBtn}>
                <Button btnClass="btnPriceBlock">
                    {btnName}
                </Button>
            </div>
        </div>

    );
};

CardPricing.propTypes = {
    tariff: PropTypes.string,
    monthlyPrice: PropTypes.string,
    pricePerYear: PropTypes.string,
    textPriceYear: PropTypes.string,
    description: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string,
    description3: PropTypes.string,
    description4: PropTypes.string,
    description5: PropTypes.string,
    btnName: PropTypes.string
}
