import React from "react";
import {FirstBlock} from "../../components/FirstBlock/FirstBlock";
import {SecondBlock} from "../../components/SecondBlock/SecondBlock";
import {ThirdBlock} from "../../components/ThirdBlock/ThirdBlock";
import {BerbackHero} from "../../components/BerbackHero/BerbackHero";
import {OurClients} from "../../components/OurClients/OurClients";
import {Pricing} from "../../components/Pricing/Pricing";

export const Home = () => {

    return (
        <>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock/>
            <BerbackHero/>
            <OurClients/>
            <Pricing/>
        </>
    );
};

