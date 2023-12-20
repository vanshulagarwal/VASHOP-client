import React, { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.yourstory.com/cs/7/1da9ec3014cc11e9a1b2b928167b6c62/mensfashionbanner1572434751640png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
        "https://yogaclub.com/cdn/shop/articles/freestocks-_3Q3tsJ01nc-unsplash_1024x1024.jpg?v=1622283694",
        "https://assets.nst.com.my/images/articles/mlinenfgbhy_1683094260.jpg",
    ];

    const dataSize = data.length;

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? dataSize - 1 : prev => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === dataSize - 1 ? 0 : next => next + 1);
    };

    return (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosNewIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider;