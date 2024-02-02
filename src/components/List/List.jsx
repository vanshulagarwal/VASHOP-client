import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = ({data}) => {
    
    return (
        <div className="list">{data.map(item => (
            <Card item={item} key={item._id} />
        ))
        }</div>
    )
}

export default List;