import React, { useRef, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import CloseIcon from '@mui/icons-material/Close';
import Profile from "../Profile/Profile";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navbar = () => {
    const products = useSelector((state) => state.cart.products);
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    // const search = document.querySelector('.search');
    const search = useRef();
    search.searchBtn = useRef();
    search.searchInput = useRef();
    const cartRef = useRef();
    const centerRef = useRef();
    const rightRef = useRef();
    rightRef.first = useRef();
    rightRef.second = useRef();
    rightRef.third = useRef();

    const handleSearchChange = () => {
        if (searchOpen) {
            search.searchBtn.current.style.width = 0;
            search.searchBtn.current.style.padding = 0;
            if (window.innerWidth < 600) {
                setTimeout(() => {
                    rightRef.first.current.style.display = "block";
                    rightRef.second.current.style.display = "block";
                    rightRef.third.current.style.display = "block";
                }, 1000);
            }
        }
        else {
            search.searchBtn.current.style.width = "250px";
            search.searchBtn.current.style.padding = "0 15px";
            if (window.innerWidth < 600) {
                rightRef.first.current.style.display = "none";
                rightRef.second.current.style.display = "none";
                rightRef.third.current.style.display = "none";
            }
            setTimeout(() => {
                search.searchInput.current.focus();
            }, 1000);
        }
        setSearchOpen(!searchOpen);
    }

    const handleHoverIn = () => {
        setProfileOpen(true);
    }
    const handleHoverOut = () => {
        setProfileOpen(false);
    }

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleCartOpen = () => {
        if (open) {
            cartRef.current.style.top = "-100vh";
            cartRef.current.style.width = "0px";
            cartRef.current.style.opacity = 0;
        }
        else {
            cartRef.current.style.opacity = 1;
            cartRef.current.style.top = "0px";
            cartRef.current.style.width = "400px";
            // setTimeout(() => {                    
            //     cartRef.current.style.top="0";
            // }, 600);
        }
        setOpen(!open);
    }

    const handleNavbar = () => {
        if (navOpen) {
            centerRef.current.style.left = "-200px";
        }
        else {
            centerRef.current.style.left = "0";
        }
        setNavOpen(!navOpen);
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <Link className="link" to="/">ABCDE</Link>
                </div>
                <button className="menu" onClick={handleNavbar}><MenuIcon /></button>
                <div ref={centerRef} className="center">
                    <button className="navbarClose" onClick={handleNavbar}>
                        <ArrowBackIcon fontSize=""/> <span>Back</span>
                    </button>
                    <div className="item" onClick={handleNavbar}>
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className="item" onClick={handleNavbar}>
                        <Link className="link" to="/products?categories=men">Men</Link>
                    </div>
                    <div className="item" onClick={handleNavbar}>
                        <Link className="link" to="/products?categories=women">Women</Link>
                    </div>
                    <div className="item" onClick={handleNavbar}>
                        <Link className="link" to="/products?categories=formal">Formals</Link>
                    </div>
                    <div className="item" onClick={handleNavbar}>
                        <Link className="link" to="/products?categories=winter">Winter</Link>
                    </div>
                    <div className="item" onClick={handleNavbar}>
                        <Link className="link" onClick={() => handleClickScroll("contact")}>Contact</Link>
                    </div>
                </div>

                <div className="right">
                    <div className="icons">
                        <Search ref={search} />
                        {searchOpen
                            ? <CloseIcon className="icon" onClick={handleSearchChange} />
                            : <SearchIcon className="icon" onClick={handleSearchChange} />}
                        <div className="profileIcon" ref={rightRef.first} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} >
                            <PersonOutlineOutlinedIcon className="icon" />
                            {profileOpen
                                ? <Profile />
                                : <></>}
                        </div>
                        <FavoriteBorderOutlinedIcon ref={rightRef.second} className="icon wishlistIcon" />
                        <div className="cartIcon icon" ref={rightRef.third} onClick={handleCartOpen}>
                            <ShoppingBagOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Cart ref={cartRef} handleCartOpen={handleCartOpen} />
        </div>
    )
}

export default Navbar;