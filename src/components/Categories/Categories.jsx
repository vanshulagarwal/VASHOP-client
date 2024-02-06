import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="items cate1">
                <img src="/img/men.jpeg" alt="" />
                    <Link to="/products?categories=men" className="link"><button>MEN</button></Link>
            </div>
            <div className="items cate2">
                <img src="/img/winter.jpeg" alt="" />
                    <Link to="/products?categories=women" className="link"><button>WOMEN</button></Link>
            </div>
            <div className="items cate3">
                <img src="/img/footwear.jpeg" alt="" />
                    <Link to="/products?categories=shoes" className="link"><button>SHOES</button></Link>
            </div>
            <div className="items cate4">
                <img src="/img/women.jpeg" alt="" />
                    <Link to="/products?categories=winter" className="link"><button>WINTER</button></Link>
            </div>
            <div className="items cate5">
                <img src="/img/formal.jpeg" alt="" />
                    <Link to="/products?categories=formal" className="link"><button>FORMALS</button></Link>
            </div>
            <div className="items cate6">
                <img src="/img/accessories.jpeg" alt="" />
                <Link to="/products?categories=accessories" className="link"><button>ACCESSORIES</button></Link>
            </div>
        </div>
    )
}

export default Categories;