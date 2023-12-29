import React, { useState } from "react";
import "./Search.scss";
import SearchIcon from '@mui/icons-material/Search';
import useFetch from "../../hooks/useFetch";

const Search = () => {
    const [input, setInput] = useState("");


    const { data, loading, error } = useFetch(`/products?keyword=${input}`);

    const [showResults, setShowResults] = useState(false);

    const handleFocus = () => {
        setShowResults(true);
    }

    const handleBlur = () => {
        setShowResults(false);
    }

    return (
        <div className="search">
            <div className="input-wrapper" onFocus={handleFocus} onBlur={handleBlur}>
                <SearchIcon />
                <input id="searchInput" type="text" placeholder="Type to search..." value={input} onChange={e => setInput(e.target.value)} />
            </div>
            {showResults
                ? data.length
                    ? <div className="resultsList">
                        {data.map(item => {
                            return <div key={item._id} className="item">
                                <img src={"/img" + item.imgPath} alt="" />
                                <p>{item.name}</p>
                            </div>
                        })}
                        {data.map(item => {
                            return <div key={item._id} className="item">
                                <img src={"/img" + item.imgPath} alt="" />
                                <p>{item.name}</p>
                            </div>
                        })}
                        {data.map(item => {
                            return <div key={item._id} className="item">
                                <img src={"/img" + item.imgPath} alt="" />
                                <p>{item.name}</p>
                            </div>
                        })}
                    </div>
                    : <div className="noResults">No Results Found</div>
                : ""
            }
        </div>
    )
}

export default Search;