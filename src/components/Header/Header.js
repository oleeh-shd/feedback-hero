import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import {Button} from "../Button/Button";
import {Image} from "../Image/Image";
import styles from "./Header.module.scss";
import {HeaderBurger} from "../HeaderBurger/HeaderBurger";

export const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <Image src={logo} alt="logo" imageClass="imgLogo"/>
                <div className={styles.link}>
                    <Link to='/'>Features</Link>
                    <Link to='/'>Pricing</Link>
                    <Link to='/'>Blog</Link>
                </div>
                <div className={styles.wrapperBtn}>
                    <Button btnClass="btnRegister">Register</Button>
                </div>
                <HeaderBurger/>
            </header>
            <div className={styles.line}/>
        </>
    );
};