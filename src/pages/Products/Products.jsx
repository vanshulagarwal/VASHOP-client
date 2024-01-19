import React, { useRef, useState } from "react"
import List from "../../components/List/List";
import { useSearchParams } from "react-router-dom";
import "./Products.scss";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categ, setCateg] = useState(searchParams.get("categories"));

    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(2000);
    const [sort, setSort] = useState(null);

    const [filterOpen, setFilterOpen] = useState(false);
    const filterRef = useRef();

    // console.log(categ);
    // console.log(maxPrice);
    const { data, loading, error } = useFetch(`/products?category=${categ}&price[gt]=${valueA}&price[lt]=${valueB}`);
    // console.log(data);

    if (sort) {
        data.sort((a, b) => {
            if (sort === 'asc') {
                return a.price - b.price;
            } else if (sort === 'desc') {
                return b.price - a.price;
            }
        });
    }

    const handleFilterOpen = () => {
        if (filterOpen) {
            filterRef.current.style.left = "-240px";
        }
        else {
            filterRef.current.style.left = "0px";
        }
        setFilterOpen(!filterOpen);
    }

    const handleInputChange = (event, setValue, propertyName) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);
        document.documentElement.style.setProperty(`--${propertyName}`, `${newValue}`);
        document.documentElement.style.setProperty(`--text-${propertyName}`, JSON.stringify(newValue));
    };

    return <div className="products">
        <div ref={filterRef} className="left">
            <div className="filterItem">
                <h2 className="categoryHeading">Categories</h2>
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
                <h2>By Price</h2>
                {/* <div className="inputItem">
                    <span>0</span>
                    <input type="range" min={0} max={5000} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    <span>{maxPrice}</span>
                </div> */}
                <div className="range-slider flat" data-ticks-position="top" style={{ '--min': 0, '--max': 5000, '--value-a': valueA, '--value-b': valueB, '--suffix': '%', '--text-value-a': JSON.stringify(valueA), '--text-value-b': JSON.stringify(valueB) }}>
                    <input type="range" min="0" max="5000" value={valueA} onChange={(e) => handleInputChange(e, setValueA, 'value-a')} />
                    <output>{valueA}</output>
                    <input type="range" min="0" max="5000" value={valueB} onChange={(e) => handleInputChange(e, setValueB, 'value-b')} />
                    <output>{valueB}</output>
                    <div className="range-slider__progress"></div>
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
            <button className="filterBtn" onClick={handleFilterOpen}>FILTER</button>
        </div>
        <div className="right">
            <img className="catImg" src={"/img/" + categ + ".jpeg"} alt="" />
            {error
                ? toast.error("Something went wrong", {
                    position: toast.POSITION.TOP_LEFT
                })
                : loading
                    ? <Loader />
                    : <List data={data} />
            }
        </div>
    </div>
}

export default Products;