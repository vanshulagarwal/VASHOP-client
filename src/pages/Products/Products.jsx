import React, { useState } from "react"
import List from "../../components/List/List";
import { useSearchParams } from "react-router-dom";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categ, setCateg] = useState(searchParams.get("categories"));

    const [maxPrice, setMaxPrice] = useState(4000);
    const [sort, setSort] = useState(null);

    // console.log(categ);
    // console.log(maxPrice);
    const { data, loading, error } = useFetch(`/products?category=${categ}&price[lt]=${maxPrice}`);
    console.log(data);

    if (sort) {
        data.sort((a, b) => {
            if (sort === 'asc') {
                return a.price - b.price;
            } else if (sort === 'desc') {
                return b.price - a.price;
            }
        });
    }

    return <div className="products">
        <div className="left">
            <div className="filterItem">
                <h2>Product Categories</h2>
                <div className="inputItem">
                    <input type="radio" name="categ" id="1" value={"men"} defaultChecked={categ == "men" ? true : false} onChange={e => setCateg(e.target.value)} />
                    <label htmlFor="1">Men</label>
                </div>
                <div className="inputItem">
                    <input type="radio" name="categ" id="2" value={"women"} defaultChecked={categ == "women" ? true : false} onChange={e => setCateg(e.target.value)} />
                    <label htmlFor="2">Women</label>
                </div>
                <div className="inputItem">
                    <input type="radio" name="categ" id="3" value={"children"} defaultChecked={categ == "children" ? true : false} onChange={e => setCateg(e.target.value)} />
                    <label htmlFor="3">children</label>
                </div>
                <div className="inputItem">
                    <input type="radio" name="categ" id="4" value={"winter"} defaultChecked={categ == "winter" ? true : false} onChange={e => setCateg(e.target.value)} />
                    <label htmlFor="4">Winter Collection</label>
                </div>
                <div className="inputItem">
                    <input type="radio" name="categ" id="5" value={"accesories"} defaultChecked={categ == "accesories" ? true : false} onChange={e => setCateg(e.target.value)} />
                    <label htmlFor="5">Accesories</label>
                </div>
                <div className="inputItem">
                    <input type="radio" name="categ" id="6" value={"formal"} defaultChecked={categ == "formal" ? true : false} onChange={e => setCateg(e.target.value)} />
                    <label htmlFor="6">Formals</label>
                </div>
            </div>
            <div className="filterItem">
                <h2>Filter by Price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input type="range" min={0} max={5000} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    <span>{maxPrice}</span>
                </div>
            </div>
            <div className="filterItem">
                <h2>Sort By</h2>
                <div className="inputItem">
                    <input type="radio" name="price" id="asc" value={"asc"} onChange={e => setSort("asc")} />
                    <label htmlFor="asc">Price (lowest first)</label>
                </div>
                <div className="inputItem">
                    <input type="radio" name="price" id="desc" value={"desc"} onChange={e => setSort("desc")} />
                    <label htmlFor="desc">Price (highest first)</label>
                </div>
            </div>
        </div>
        <div className="right">
            <img className="catImg" src={"/img/" + categ + ".jpeg"} alt="" />
            {error
                ? "something went wrong"
                : loading
                    ? "loading"
                    : <List data={data} />
            }
        </div>
    </div>
}

export default Products;