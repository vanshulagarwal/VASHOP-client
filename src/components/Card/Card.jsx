import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item._id}`}>
            <div className="card">
                <div className="image">
                    <img src={"/img" + item.imgPath} alt="" className="mainImg" />
                    <img src={"/img" + item.imgPath2} alt="" className="secondImg" />
                </div>
                <h2>{item.name}</h2>
                <div className="rating">
                    <Rating initialValue={item.rating} readonly={true} size={20} allowFraction={true} /> <span>({item.numOfReviews} reviews)</span>
                </div>
                <div className="prices">
                    <h3>&#8377;{item.oldPrice || item.price + 200}</h3>
                    <h3>&#8377;{item.price}</h3>
                </div>
            </div>
        </Link>
    )
};

export default Card;