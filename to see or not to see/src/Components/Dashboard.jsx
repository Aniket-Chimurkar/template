import "./style.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {Navigate } from "react-router-dom"
import { getProductsData } from "../Redux/Products/Action";


export const Dashboard=()=>{

    const {token, isAuthenticated}= useSelector((state)=>state.login);
    const {products}= useSelector((state)=> state.products);
    const dispatch= useDispatch();

    // console.log(token);

    const fetchAndUpdateData=()=>{
        dispatch(getProductsData())
    };

    useEffect(()=>{
        fetchAndUpdateData();
    },[]);

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }

    return (
        <>
          Home
        <div className="products">
          
         {/* {   console.log(products)} */}
         {products.map((e)=><div key={e.id}>
             <img src={e.image} alt="" width="150px" />
             <h3>{e.title}</h3>
             <h4>{e.price}</h4>
         </div>)}
        </div>
        </>
    )
}