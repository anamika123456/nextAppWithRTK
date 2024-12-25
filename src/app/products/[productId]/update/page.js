"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {updateProducts, fetchProductDetail} from "../../../../redux/productSlice";

export default function Page(props){
    const router= useRouter();
    const [productDetail, setProductDetail] = useState({});
    
    // console.log('detailData11====',detailData)
    // if(detailData){
    //     setProductDetail(detailData);
    // }
    const dispatch = useDispatch();
    
    const getProductFunc= (e)=>{
        setProductDetail({...productDetail, [e.target.name]: e.target.value})
    }
    const updateProductsFunc = async()=>{
        const productId = await(props.params).productId ;
        // console.log('productId', productId)
        dispatch(updateProducts(productDetail, productId));
        router.push('/products')
    }
    const productDetailFunc = async()=>{
        const productId = await(props.params).productId ;
        let responseData = dispatch(fetchProductDetail(productId));
        console.log('responseData', responseData)
        // const detailData = useSelector((data)=>data.productsReducer.productDetail) ;
    }
    useEffect(()=>{
        productDetailFunc()
    }, [])

    return(
        <div className="container-md">
            <h3 className="text-center my-3">Add Products</h3>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name= "name"  value={productDetail.name || ''} onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Price</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="price"  value={productDetail.price || ''} onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Company</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="company" value={productDetail.company || ''} onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Color</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="color" value={productDetail.color || ''}  onChange={getProductFunc} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="category" value={productDetail.category || ''} onChange={getProductFunc} />
            </div>
            <div className="mb-3 d-md-flex justify-content-md-center">
                <button  className="btn btn-primary mx-3" type="button" onClick={updateProductsFunc}>Submit</button>
                <Link  href="/products" className="btn btn-danger  " type="button">Back</Link>
            </div>
        </div>
    );
}