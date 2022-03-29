import React from "react";
import PropTypes from "prop-types";
import {Image} from "../../Image/Image";
import styles from "./CompaniesCard.module.scss";

export const CompaniesCard = ({image = "", imageClass = ""}) => {

    return (
        <div className={styles.container}>
            <Image src={image} imageClass="logoCompanies"/>
        </div>
    );
};

CompaniesCard.propTypes = {
    image: PropTypes.string,
    imageClass: PropTypes.string
}

