import React, { useState } from "react"
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Loader from "../../components/Loader/Loader";
import { Rating } from "react-simple-star-rating";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Product = () => {
    const [selectedImage, setSelectedImage] = useState("imgPath");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const id = useParams().id;
    // console.log(id);
    const { data, loading, error } = useFetch(`/products/${id}`);
    // console.log(data);


    return (
        <div className="product">
            {error
                ? "Something went wrong"
                : loading
                    ? <Loader />
                    : <>
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
                                <span><Rating initialValue={data.rating} readonly={true} size={20} allowFraction={true} />{data.rating}</span>
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
                            <button className="add" onClick={() => dispatch(addToCart({
                                _id: data._id,
                                name: data.name,
                                description: data.description,
                                price: data.price,
                                imgPath: data.imgPath,
                                quantity: quantity,
                            }))}>
                                <AddShoppingCartIcon />ADD TO CART
                            </button>
                            {/* <div className="links"> */}
                            <div className="wishlistAdd">
                                <FavoriteBorderIcon />ADD TO WISHLIST
                            </div>
                            {/* </div> */}
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
                            <h3 className="reviewHeading">Reviews</h3>
                            {data.reviews && data.reviews[0]
                                ? (<div className="reviews">
                                    {data.reviews.map(review => <ReviewCard review={review} key={review._id} />)}
                                </div>)
                                : <div className="noReviews">No Reviews Yet</div>}
                        </div>
                    </>}
        </div>
    )
}

export default Product;