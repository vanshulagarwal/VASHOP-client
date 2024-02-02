import React from "react";
import "./Loader.scss";
import { PuffLoader } from "react-spinners";
import logo from "/img/logo.png";

const Loader = () => {
    return (
        <div className="loader">
            <PuffLoader size={"20rem"} className="animation" color="black"/>
            <img src={logo} alt="logo" className="logo" />
        </div>
    )
};

export default Loader;