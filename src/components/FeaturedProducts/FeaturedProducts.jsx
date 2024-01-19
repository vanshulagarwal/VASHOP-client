import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
// import axios from "axios";
// import { makeRequest } from "../../makeRequest";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch("/products");
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const res = await makeRequest.get("/products");
    //             setData(res.data.products);
    //         } catch (err) {
    //             setError(true);
    //             console.log(err);
    //         }
    //         setLoading(false);
    //     };
    //     fetchData();
    // }, []);

    // console.log(data.length);

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
            </div>
            <div className="bottom">
                {error
                    ? toast.error("Something Went Wrong", {
                        position: toast.POSITION.TOP_LEFT
                    })
                    : loading
                        ? <Loader />
                        : (console.log(data.length), data.map(item => (
                            <Card item={item} key={item._id} />
                        )))}
                {/* {error
                    ? toast.error("Something went wrong", {
                        position: toast.POSITION.TOP_LEFT
                    })
                    : loading
                        ? <Loader />
                        : (console.log(data.length), data.map(item => (
                            <Card item={item} key={item._id} />
                        )))} */}
            </div>
        </div>
    )
}

export default FeaturedProducts;