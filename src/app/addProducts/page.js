"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {addProducts} from "../../redux/productSlice";

export default function Page(){
    const router= useRouter();
    const dispatch = useDispatch();
    const [productDetail, setProductDetail] = useState({});
    const getProductFunc= (e)=>{
        setProductDetail({...productDetail, [e.target.name]: e.target.value})
    }
    const addProduct = ()=>{
        dispatch(addProducts(productDetail));
        router.push('/products')
    }
    return(
        <div className="container-md">
            <h3 className="text-center my-3">Add Products</h3>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name= "name"  onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Price</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="price"  onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Company</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="company"  onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Color</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="color"  onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="category"  onChange={getProductFunc} />
            </div>
            <div className="mb-3 d-md-flex justify-content-md-center">
                <button  className="btn btn-primary mx-3" type="button" onClick={addProduct}>Submit</button>
                <Link  href="/products" className="btn btn-danger  " type="button">Back</Link>
            </div>
        </div>
    );
}