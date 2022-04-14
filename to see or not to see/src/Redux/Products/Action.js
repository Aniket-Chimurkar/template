export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCTS_LOADING ="GET_PRODUCTS_LOADING"
export const GET_PRODUCTS_ERROR="GET_PRODUCTS_ERROR";


export const getProducts=(payload)=>({
    type:GET_PRODUCTS,
    payload
});

export const getProductsLoading=()=>({
    type:GET_PRODUCTS_LOADING
});

export const getProductError=()=>({
    type:GET_PRODUCTS_ERROR
});

export const getProductsData=()=>(dispatch)=>{
    dispatch(getProductsLoading());
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((res)=>dispatch(getProducts(res)))
    .catch(()=>dispatch(getProductError()))
}