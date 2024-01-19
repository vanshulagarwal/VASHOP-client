import React, { useState } from "react"
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Loader from "../../components/Loader/Loader";
import { Rating } from "react-simple-star-rating";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import usePostFetch from "../../hooks/usePostFetch";
import { removeAuth } from "../../redux/authReducer";
import { toast } from 'react-toastify';

const Product = () => {
    const dispatch = useDispatch();
    const id = useParams().id;
    // console.log(id);
    const { data, loading, error } = useFetch(`/products/${id}`);
    // console.log(data);
    const loggedInUser = useSelector(state => state.auth.auth.user);

    const user = useSelector(state => state.auth.auth.user);
    const [selectedImage, setSelectedImage] = useState("imgPath");
    const [quantity, setQuantity] = useState(1);
    const [reviewTitle, setReviewTitle] = useState("");
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(1);
    const [visibleReviews, setVisibleReviews] = useState(3);

    const handleRating = (rate) => {
        setRating(rate);
    }

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        const data = await usePostFetch(`/products/${id}/addreview`, {
            author: loggedInUser._id,
            title: reviewTitle,
            rating: rating,
            comment: newReview
        })
        // console.log(data.data);
        if (data.data && data.data.review) {
            toast.success("Thank You for your Valuable Feedback", {
                position: toast.POSITION.TOP_LEFT
            });
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
        <div className="product">
            {error
                ? toast.error("Something went wrong.", {
                    position: toast.POSITION.TOP_LEFT
                })
                : loading
                    ? <Loader />
                    : <>
                        <div className="top">
                            <div className="left">
                                <div className="images">
                                    <img src={"/img" + data.imgPath} alt="" onClick={e => setSelectedImage("imgPath")} />
                                    <img src={"/img" + data.imgPath2} alt="" onClick={e => setSelectedImage("imgPath2")} />
                                </div>
                                <div className="mainImg">
                                    {/* <img src={images[selectedImage]} alt="" /> */}
                                    <img src={"/img" + data[selectedImage]} alt="" />
                                </div>
                            </div>
                            <div className="right">
                                <h1>{data.name}</h1>
                                <div className="rating">
                                    <span><Rating initialValue={data.rating} readonly={true} size={20} allowFraction={true} />{Math.round(data.rating * 100) / 100}</span>
                                    <span>({data.numOfReviews} reviews)</span>
                                </div>
                                <div className="price">
                                    <h3>&#8377;{data.price}</h3>
                                    <h3>&#8377;{data.oldPrice || data.price + 200}</h3>
                                </div>
                                <hr />
                                <p>{data.description}</p>
                                <div className="quantity">
                                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                                    <div>{quantity}</div>
                                    <button onClick={() => setQuantity((prev) => (prev === 10 ? 10 : prev + 1))}>+</button>
                                </div>
                                <button className="add" onClick={() => {
                                    dispatch(addToCart({
                                        _id: data._id,
                                        name: data.name,
                                        description: data.description,
                                        price: data.price,
                                        imgPath: data.imgPath,
                                        quantity: quantity,
                                    }))
                                    toast.success("Product Added to Cart", {
                                        position: toast.POSITION.TOP_LEFT
                                    });
                                }}>
                                    <AddShoppingCartIcon />ADD TO CART
                                </button>
                                {/* <div className="links"> */}
                                <div className="wishlistAdd">
                                    <FavoriteBorderIcon />ADD TO WISHLIST
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="info">
                                <span>Vendor:ALLEN SOLLY</span>
                                <span>Product Type: T-shirt</span>
                                <span>Tag: T-shirt, Men, Top</span>
                            </div>
                            <div className="info">
                                <span>DESCRIPTION</span>
                                <hr />
                                <span>ADDITIONAL INFORMATION</span>
                                <hr />
                                <span>FAQ</span>
                            </div>
                            <div className="reviewSection">
                                <h3 className="reviewHeading">Reviews</h3>
                                <div className="addReview">
                                    <h3>Add A Review</h3>
                                    {user
                                        ?
                                        <form>
                                            <Rating onClick={handleRating} initialValue={rating} size={25} />
                                            <input type="text" value={reviewTitle} onChange={e => setReviewTitle(e.target.value)} placeholder="Title" />
                                            <textarea type="text" value={newReview} onChange={e => setNewReview(e.target.value)} placeholder="Write a review..." />
                                            <button onClick={handleReviewSubmit}>Submit Review</button>
                                        </form>
                                        : <div className="signInReview">
                                            Sign in to write a review
                                            <a href="/login"><button>Sign In</button></a>
                                        </div>}
                                </div>
                                {data.reviews && data.reviews[0]
                                    ? (<div className="reviews">
                                        {data.reviews.slice(0, visibleReviews).map(review => <ReviewCard review={review} key={review._id} />)}
                                    </div>)
                                    : <div className="noReviews">No Reviews Yet</div>
                                }
                                {
                                    data.reviews && visibleReviews < data.reviews.length
                                        ? <p className="showMore" onClick={() => setVisibleReviews(prev => prev + 3)}>Show More...</p>
                                        : ""
                                }
                            </div>
                        </div>
                    </>}
        </div>
    )
}

export default Product;