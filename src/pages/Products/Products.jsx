import React, { useState } from "react"
import List from "../../components/List/List";
import { useSearchParams } from "react-router-dom";
import "./Product.scss";

const Products = () => {
    const [searchParams, setSetParams] = useSearchParams();
    const categ = searchParams.get("categories");

    const [maxPrice, setMaxPrice] = useState(2000);
    const [sort, setSort] = useState(null);

    return <div className="products">
        <div className="left">
            <div className="filterItem">
                <h2>Product Categories</h2>
                <div className="inputItem">
                    <input type="checkbox" id="1" value={"cate1"} />
                    <label htmlFor="1">Cate1</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="2" value={"cate2"} />
                    <label htmlFor="2">Cate2</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="3" value={"cate3"} />
                    <label htmlFor="3">Cate3</label>
                </div>
                <div className="inputItem">
                    <input type="checkbox" id="4" value={"cate4"} />
                    <label htmlFor="4">Cate4</label>
                </div>
            </div>
            <div className="filterItem">
                <h2>Filter by Price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input type="range" min={0} max={5000} onChange={(e) => setMaxPrice(e.target.value)} />
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
            <img className="catImg" src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <List categories={categ} maxPrice={maxPrice} sort={sort} />
        </div>
    </div>
}

export default Products;