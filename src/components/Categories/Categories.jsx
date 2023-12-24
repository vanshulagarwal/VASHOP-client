import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="items cate1">
                <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to="/products?categories=men" className="link">MEN</Link>
                </button>
            </div>
            <div className="items cate2">
                <img src="https://images.pexels.com/photos/19477597/pexels-photo-19477597/free-photo-of-young-brunette-standing-in-a-snowy-forest.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to="/products?categories=women" className="link">WOMEN</Link>
                </button>
            </div>
            <div className="items cate3">
                <img src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to="/products?categories=shoes" className="link">SHOES</Link>
                </button>
            </div>
            <div className="items cate4">
                <img src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to="/products?categories=winter" className="link">WINTER</Link>
                </button>
            </div>
            <div className="items cate5">
                <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link to="/products?categories=formals" className="link">FORMALS</Link>
                </button>
            </div>
            <div className="items cate6">
                <img src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link to="/products?categories=accesories" className="link">ACCESSORIES</Link>
                </button>
            </div>
        </div>
    )
}

export default Categories;