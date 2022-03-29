import React from "react";
import {cardPricing} from "../../../lists/cardPricing";
import {CardPricing} from "../CardPricing/CardPricing";
import styles from "./CardPricingList.module.scss";

export const CardPricingList = () => {

    return (
        <div className={styles.container}>
            {cardPricing.map(({
                                  tariff,
                                  btnName,
                                  description,
                                  pricePerYear,
                                  monthlyPrice,
                                  textPriceYear,
                                  description1,
                                  description2,
                                  description3,
                                  description4,
                                  description5,
                                  id
                              }) => (
                <div key={id} className={styles.wrapperCard}>
                    <CardPricing
                        tariff={tariff}
                        monthlyPrice={monthlyPrice}
                        pricePerYear={pricePerYear}
                        textPriceYear={textPriceYear}
                        description={description}
                        description1={description1}
                        description2={description2}
                        description3={description3}
                        description4={description4}
                        description5={description5}
                        btnName={btnName}
                    />
                </div>
            ))}
        </div>
    );
};



