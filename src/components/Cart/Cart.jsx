import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, reduceQuantity, removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
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
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className="item" key={item._id}>
                    <img src={"/img" + item.imgPath} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.description?.substring(0, 30)}...</p>
                        <div className="price">
                            <span className="delete" onClick={() => dispatch(reduceQuantity(item._id))}>-</span>
                            {item.quantity} X ${item.price}
                            <span className="delete" onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>+</span>
                        </div>
                    </div>
                    <DeleteOutlineIcon className="delete" onClick={() => dispatch(removeItem(item._id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalCart()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}

export default Cart;