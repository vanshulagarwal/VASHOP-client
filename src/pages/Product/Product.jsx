import React, { useState } from "react"
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

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
                    ? "loading"
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
                            <span className="price"> &#8377; {data.price}</span>
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
                        </div>
                    </>}
        </div>
    )
}

export default Product;