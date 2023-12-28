import React from "react";
import "./Loader.scss";
import {HashLoader} from "react-spinners";

const Loader=()=>{
    return (
        <div className="loader">
            <HashLoader color="#023e8a;"/>
        </div>
    )
};

export default Loader;