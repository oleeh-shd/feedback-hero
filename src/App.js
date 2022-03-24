import React from "react";
import {Header} from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {Home} from "./pages/Home/Home";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
            <Home/>
        </>
    );
};

