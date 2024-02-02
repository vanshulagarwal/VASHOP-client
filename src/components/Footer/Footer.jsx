import React from "react"
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return <>
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <Link className="link" to="/products?categories=men">Men</Link>
                    <Link className="link" to="/products?categories=women">Women</Link>
                    <Link className="link" to="/products?categories=winter">Winter</Link>
                    <Link className="link" to="/products?categories=shoes">Footwear</Link>
                    <Link className="link" to="/products?categories=accessories">Accessories</Link>
                    <Link className="link" to="/products?categories=formal">Formals</Link>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>Home</span>
                    <span>Contact</span>
                    <span>About</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>A website where you can buy products of amazing quality at affordable prices. Choose your style from the vast collection of products, all at your fingertip.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>This is a website created for educational purposes. The developer wants to practice his hands on MERN stack, that's it. You may contact me via Linkedin, Twitter, Instagram. The source code is available on Github.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">VA.SHOP</span>
                    <span className="copyright"> &copy; Copyright 2024. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    </>
}

export default Footer;