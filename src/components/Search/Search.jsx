import React, { forwardRef, useState } from "react";
import "./Search.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Search = forwardRef(({ }, ref) => {
    const [input, setInput] = useState("");


    const { data, loading, error } = useFetch(`/products?keyword=${input}`);

    const [showResults, setShowResults] = useState(false);

    const handleFocus = () => {
        setShowResults(true);
    }

    const handleBlur = () => {
        setShowResults(false);
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
    }

    return (
        <div ref={ref.searchBtn} className="search">
            <div className="input-wrapper" onFocus={handleFocus} onBlur={handleBlur}>
                <input ref={ref.searchInput} id="searchInput" type="text" placeholder="Type to search..." value={input} onChange={e => setInput(e.target.value)} />
            </div>
            {showResults
                ? data.length
                    ? <div className="resultsList" onMouseDown={handleMouseDown}>
                        {data.map(item => {
                            return <Link to={"/product/" + item._id} className="link">
                                <div key={item._id} className="item">
                                    <img src={"/img" + item.imgPath} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        })}
                    </div>
                    : <div className="noResults" onMouseDown={handleMouseDown}>No Results Found</div>
                : ""
            }
        </div>
    )
})

export default Search;