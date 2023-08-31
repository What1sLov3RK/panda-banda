import React from "react";
import { useLocation } from 'react-router-dom';

export default function ProductPage() {
    const location = useLocation();
    const data = location.state.item; // Access the 'item' object from the state

    console.log(data)

    return (
        <>
            <h1>{data.name}</h1>
            <img src={data.image_path} style={{ width:"200px", height:"300px"}}/>
            <h1>{data.type}</h1>
            <h1>{data.price}</h1>
            <h1>{data.name}</h1>


        </>
    );
}
