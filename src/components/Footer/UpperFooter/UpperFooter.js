import React from "react";
import {Image} from "../../Image/Image";
import logo from "../../../assets/images/logo.svg";
import {TextField} from "../../TextField/TextField";
import {Button} from "../../Button/Button";
import {Link} from "react-router-dom";
import twitter from "../../../assets/images/upperFooter/et_twitter.svg";
import linkedin from "../../../assets/images/upperFooter/et_linkedin.svg";
import facebook from "../../../assets/images/upperFooter/et_facebook.svg";
import styles from "./UpperFooter.module.scss";


export const UpperFooter = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapperLogo}>
                <Image src={logo} alt="logo" imageClass="imgLogo"/>
                <TextField text="Your Business Superhero" textClass="textFooter"/>
                <Button btnClass="btnBlack">Buy now</Button>
            </div>
            <div>
                <div className={styles.containerLinks}>
                    <div className={styles.wrapperLinks}>
                        <TextField text="Quick links" textClass="titleFooterLink"/>
                        <Link to="/">Features</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Price</Link>
                    </div>
                    <div className={styles.wrapperLinks}>
                        <TextField text="Legal information" textClass="titleFooterLink"/>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Cookie</Link>
                        <Link to="/">Terms of use</Link>
                    </div>
                    <div className={styles.wrapperLinks}>
                        <TextField text="Contact" textClass="titleFooterLink"/>
                        <TextField text="+39 333 3333333"/>
                        <div className={styles.mail}>
                            <TextField text="feedbackhero.info@gmail.com"/>
                        </div>
                        <div className={styles.socialLogo}>
                            <a href="https://twitter.com/">
                                <Image src={twitter} alt="twitter" imageClass="imgSocialLogo"/>
                            </a>
                            <a href="https://www.linkedin.com/">
                                <Image src={linkedin} alt="twitter" imageClass="imgSocialLogo"/>
                            </a>
                            <a href="https://www.facebook.com/">
                                <Image src={facebook} alt="facebook" imageClass="imgSocialLogo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
