import React, { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url, reload = 0) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setData(res.data.products||res.data.product);
            } catch (err) {
                setError(true);
                console.log(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url, reload]);

    return { data, loading, error };
}

export default useFetch;