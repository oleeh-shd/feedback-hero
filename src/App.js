import React from "react";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Router} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Footer} from "./components/Footer/Footer";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Home/>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

