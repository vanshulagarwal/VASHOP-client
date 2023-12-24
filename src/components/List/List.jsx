import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = ({data}) => {
    // const data = [
    //     {
    //         id: 1,
    //         imgPath: "/1.jpeg",
    //         imgPath2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         name: "Hoodie",
    //         oldPrice: 1299,
    //         price: 1099,
    //     },
    //     {
    //         id: 2,
    //         imgPath: "/2.jpeg",
    //         imgPath2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         name: "TShirt",
    //         oldPrice: 999,
    //         price: 699,
    //     },
    //     {
    //         id: 3,
    //         imgPath: "/3.jpeg",
    //         imgPath2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         name: "Hat",
    //         oldPrice: 399,
    //         price: 299,
    //     },
    //     {
    //         id: 4,
    //         imgPath: "/4.jpeg",
    //         imgPath2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         name: "Skirt",
    //         oldPrice: 1699,
    //         price: 1499,
    //     },
    // ];
    
    return (
        <div className="list">{data.map(item => (
            <Card item={item} key={item._id} />
        ))
        }</div>
    )
}

export default List;