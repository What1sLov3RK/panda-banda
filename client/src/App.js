import React, {useState} from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Head from "./components/Head";
import Footer from "./components/Footer";
import './styles/index.scss'

function App(){
    const [cart, setCart] = useState({})
    return(
        <>
            <Head />
            <RouterProvider router={router}/>
            <Footer />
        </>
  )
}


export default App