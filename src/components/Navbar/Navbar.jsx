import React, { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <Link className="link" to="/">ECOMMERCE</Link>
                </div>
                <div className="center">
                    <div className="item">
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products?categories=men">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products?categories=women">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products?categories=formal">Formals</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products?categories=winter">Winter</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                </div>

                <div className="right">
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingBagOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar;