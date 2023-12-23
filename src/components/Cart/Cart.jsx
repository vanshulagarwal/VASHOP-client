import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Hoodie",
            description: "Hoodie with a yellow ting and something",
            oldPrice: 1299,
            price: 1099,
        },
        {
            id: 2,
            img1: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "TShirt",
            description: "Hoodie with a yellow ting and something",
            oldPrice: 999,
            price: 699,
        },
    ]
    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img1} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.description?.substring(0,30)}...</p>
                        <div className="price">1 X ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className="delete"/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart;