import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import {Button} from "../Button/Button";
import styles from "./Header.module.scss";

export const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="logo"/>
                <div className={styles.link}>
                    <Link to='/'>Features</Link>
                    <Link to='/'>Pricing</Link>
                    <Link to='/'>Blog</Link>
                </div>
                <Button btnClass="btnRegister">Register</Button>
            </header>
            <div className={styles.line}/>
        </>
    );
};