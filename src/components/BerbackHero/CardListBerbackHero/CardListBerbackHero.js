import React from "react";
import {cardBerbackHero} from "../../../lists/cardBerbackHero";
import {CardBerbackHero} from "./CardBerbackHero/CardBerbackHero";
import styles from "./CardListBerbackHero.module.scss"

export const CardListBerbackHero = () => {

    return (
        <div className={styles.container}>
            {
                cardBerbackHero.map(card => (
                    <CardBerbackHero
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        text={card.text}
                    />
                ))
            }
        </div>
    );
};

