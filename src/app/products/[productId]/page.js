"use client"
import Link from "next/link";
import {fetchProductDetail} from "../../../redux/productSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Page(props){
    let productDetail = useSelector((data)=>data.productsReducer.productDetail)
    const dispatch = useDispatch();
    useEffect(()=>{
        productDetailFunc()
    },[])
    const productDetailFunc=async()=>{
        let productId = await (props.params).productId
        dispatch(fetchProductDetail(productId))
    }

    return(
        <div className="container-md">
            <h3 className="text-center my-3">Product Details:</h3>
            <div className="mb-3">
                <span className="form-label"><b>Name:</b> </span>
                <span> {productDetail.name}</span>
            </div>
            <div className="mb-3">
                <span className="form-label"><b>Price</b></span>
                <span> {productDetail.price}</span>
            </div>
            <div className="mb-3">
                <span className="form-label"><b>Company</b></span>
                <span> {productDetail.company}</span>
            </div>
            <div className="mb-3">
                <span className="form-label"><b>Color</b></span>
                <span> {productDetail.color}</span>
            </div>
            <div className="mb-3">
                <span  className="form-label"><b>Category</b></span>
                <span> {productDetail.category}</span>
            </div>
            <div className="mb-3 d-md-flex justify-content-md-center">
                <Link  href="/products" className="btn btn-danger  " type="button">Back</Link>
            </div>
        </div>
    );
}