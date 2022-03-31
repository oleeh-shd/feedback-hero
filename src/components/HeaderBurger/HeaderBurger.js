import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
import styles from "./HeaderBurger.module.scss";

export const HeaderBurger = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const handleClick = () => openBurger ? setOpenBurger(false) : setOpenBurger(true);

    return (
        <div className={styles.container}>
            <div className={openBurger ? styles.burgerButtonActive : styles.burgerButton}
                onClick={handleClick}>
                <span className={styles.line}/>
            </div>
            <div className={openBurger ? styles.dropDownWrapperActive : styles.dropDownWrapper}>
                <Link to='/'>Features</Link>
                <Link to='/'>Pricing</Link>
                <Link to='/'>Blog</Link>
                <div className={styles.wrapperBtn}>
                    <Button btnClass="btnHeaderBurger">Register</Button>
                </div>
            </div>
        </div>
    );
};



