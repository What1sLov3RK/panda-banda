import React, {useEffect, useState} from 'react';
import '../styles/catalogue.scss';
import ProductCard from "../components/ProductCard";
import {useLocation } from "react-router-dom";

function Catalogue(){
    const [backendData, setBackendData] = useState(null)

    let state = useLocation();

    useEffect(() => {
    fetch(state.pathname, )
        .then(response => response.json())
        .then(data => setBackendData(data.objects))
        .catch(error => console.error('Error fetching data', error));
}, [state.pathname, state.key]);



    return(
        <ProductCard data={backendData} />
    )
}

export default Catalogue