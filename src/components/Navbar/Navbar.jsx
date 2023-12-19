import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return <>
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
                        <Link className="link" to="/products?categories=cate1">Cate1</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products?categories=cate2">Cate2</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products?categories=cate3">Cate3</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products?categories=cate4">Cate4</Link>
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
                        <div className="cartIcon">
                            <ShoppingBagOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;