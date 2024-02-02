import React from "react";
import "./ReviewCard.scss";
import { Rating } from "react-simple-star-rating";
import useDeleteFetch from "../../hooks/useDeleteFetch";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../../redux/authReducer";

const ReviewCard = ({ review }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.auth.user);

    const id = useParams().id;

    const handleReviewDelete = async () => {
        const data = await useDeleteFetch(`/products/${id}/deletereview/${review._id}`)
        if (data.data && data.data.review) {
            toast.success("Review Deleted", {
                position: toast.POSITION.TOP_LEFT
            });
            window.location.reload();
        }
        else {
            if (data.status == 401) {
                toast.error("Session Invalid Or Expired. Kindly ReLogin", {
                    position: toast.POSITION.TOP_LEFT
                });
                dispatch(removeAuth());
            }
            else {
                toast.error(data.error, {
                    position: toast.POSITION.TOP_LEFT
                });
            }
            console.log(data.error);
        }
    }

    return (
        <div className="reviewCard">
            {/* {review.author}
            {review.title}
            {review.rating}
            {review.comment} */}
            <h3>{review.title}</h3>
            <div className="center">
                <p>(by {review.author.name || review.author})</p>
                <Rating initialValue={review.rating} readonly={true} size={20} allowFraction={true} />
            </div>
            <span>{review.comment}</span>
            {user && (user._id == review.author._id)
                ? <button className="deleteReview" onClick={handleReviewDelete}>DELETE</button>
                : ""
            }
        </div>
    )
}

export default ReviewCard;