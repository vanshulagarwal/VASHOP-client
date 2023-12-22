import React, { useState } from "react"
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImage(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImage]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price"> &#8377; 1999</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio molestiae dolorem doloremque magni quas impedit animi doloribus aperiam at autem, maiores fugit est unde? Unde dolorem quo modi error?</p>
                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    <div>{quantity}</div>
                    <button onClick={() => setQuantity((prev) => (prev === 10 ? 10 : prev + 1))}>+</button>
                </div>
                <button className="add">
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
        </div>
    )
}

export default Product;