import React from "react";
import "./ReviewCard.scss";
import { Rating } from "react-simple-star-rating";

const ReviewCard = ({ review }) => {
    return (
        <div className="reviewCard">
            {/* {review.author}
            {review.title}
            {review.rating}
            {review.comment} */}
            <h3>{review.title}</h3>
            <div className="center">
                <p>{review.author.name || review.author}</p>
                <Rating initialValue={review.rating} readonly={true} size={20} allowFraction={true} />
            </div>
            <span>{review.comment}</span>
            <span></span>
        </div>
    )
}

export default ReviewCard;