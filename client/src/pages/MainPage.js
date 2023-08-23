import React, {useEffect, useState} from "react";
import Slider from "../components/Slider";
import FoodCategories from "../components/FoodCategories";
import ProductCard from "../components/ProductCard";
//import {Link} from "react-router-dom";

function MainPage(){
const [backendData, setBackendData] = useState(null)


useEffect(() => {
    fetch('/api', )
        .then(response => response.json())
        .then(data => setBackendData(data.objects))
        .catch(error => console.error('Error fetching data', error));
}, []);


    return(
        <>
            <Slider />
            <FoodCategories />
            <ProductCard data={backendData} />
        </>
    )
}

export default MainPage