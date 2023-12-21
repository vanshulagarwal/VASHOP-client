import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Hoodie",
            oldPrice: 1299,
            price: 1099,
        },
        {
            id: 2,
            img1: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "TShirt",
            oldPrice: 999,
            price: 699,
        },
        {
            id: 3,
            img1: "https://images.pexels.com/photos/18372435/pexels-photo-18372435/free-photo-of-light-landscape-sunset-fashion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Hat",
            oldPrice: 399,
            price: 299,
        },
        {
            id: 4,
            img1: "https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Skirt",
            oldPrice: 1699,
            price: 1499,
        },
    ];
    
    return (
        <div className="list">{data.map(item => (
            <Card item={item} key={item.id} />
        ))
        }</div>
    )
}

export default List;