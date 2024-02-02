import React, { forwardRef } from "react";
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, reduceQuantity, removeItem, resetCart } from "../../redux/cartReducer";
import CloseIcon from '@mui/icons-material/Close';
import cartEmpty from "/img/cartEmpty.png";

const Cart = forwardRef(({ handleCartOpen }, ref) => {
    const products = useSelector(state => state.cart.products)
    // console.log(products);
    const dispatch = useDispatch();

    const totalCart = () => {
        let total = 0;
        products.forEach(item =>
            total += item.quantity * item.price
        );
        return total.toFixed(2);
    }

    return (
        <div ref={ref} className="cart">
            <div className="heading">
                <h1>Cart</h1>
                <CloseIcon className="icon" onClick={handleCartOpen} />
            </div>
            <div className="content">
                {products.length
                    ? products.map(item => (
                        <div className="item" key={item._id}>
                            <div className="itemContentTop">
                                <img src={"/img" + item.imgPath} alt="" />
                                <div className="details">
                                    <h1>{item.name}</h1>
                                    <p>{item.description?.substring(0, 30)}...</p>
                                    <div className="quantity">
                                        {/* <span className="delete" onClick={() => dispatch(reduceQuantity(item._id))}>-</span>
                                        {item.quantity} X &#8377;{item.price}
                                        <span className="delete" onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>+</span> */}
                                        <button onClick={() => dispatch(reduceQuantity(item._id))}>-</button>
                                        <div>{item.quantity}</div>
                                        <button onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="itemContentBottom">
                                <div>&#8377;{item.price}</div>
                                <DeleteOutlineIcon className="deleteIcon" onClick={() => dispatch(removeItem(item._id))} />
                            </div>
                        </div>
                    ))
                    : <div className="emptyCart">
                        {/* https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp
                        data:image/png;base64,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
                        https://aleointernational.com/img/empty-cart-yellow.png */}
                        <img src={cartEmpty} alt="" />
                    </div>
                }
            </div>
            <div className="bottom">
                <div className="total">
                    <span>SUBTOTAL</span>
                    <span>&#8377;{totalCart()}</span>
                </div>
                <button>PROCEED TO CHECKOUT</button>
                <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
            </div>
        </div>
    )
})

export default Cart;