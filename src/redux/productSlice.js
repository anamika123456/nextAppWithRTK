import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState ={
    productList : [],
    productDetail : {}
}
export const addProducts = createAsyncThunk("addProducts", async(getRequestJson)=>{
    let responseData = await fetch("http://localhost:3000/api/products",{
        method: "POST",
        body: JSON.stringify(getRequestJson)
    });
    responseData = await responseData.json();
    return responseData;
})
export const fetchProducts = createAsyncThunk("fetchProducts", async()=>{
    let responseData = await fetch("http://localhost:3000/api/products");
    responseData = await responseData.json();
    return responseData;
})
export const fetchProductDetail = createAsyncThunk("fetchProductDetail", async(getProductId)=>{
    let responseData = await fetch(`http://localhost:3000/api/products/${getProductId}`);
    responseData = await responseData.json();
    console.log('detail cse==========', responseData)
    return responseData;
})
export const deleteProducts = createAsyncThunk("deleteProducts", async(getProductId)=>{
    let responseData = await fetch(`http://localhost:3000/api/products/${getProductId}`,{
        method: "DELETE"
    });
    responseData = await responseData.json();
    return responseData;
})
export const updateProducts = createAsyncThunk("updateProducts", async(getRequestJson, getProductId)=>{
    let responseData = await fetch(`http://localhost:3000/api/products/${getProductId}`,{
        method: "PUT",
        body: JSON.stringify(getRequestJson)
    });
    responseData = await responseData.json();
    return responseData;
})
const slice= createSlice({
    name : "productSlice",
    initialState :initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addProducts.fulfilled,(state,action)=>{
            // console.log('add prodt', action)
            // state.productList.push(action.payload)
        }),
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productList = action.payload.response
        }),
        builder.addCase(fetchProductDetail.fulfilled,(state,action)=>{
            console.log(action.payload.response, 'detail case ', action)
            state.productDetail = action.payload.response
        }),
        builder.addCase(deleteProducts.fulfilled,(state,action)=>{
            console.log('delete case ', action)
            // state.productList = action.payload.response
        }),
        builder.addCase(updateProducts.fulfilled,(state,action)=>{
            console.log('update case ', action)
            // state.productList = action.payload.response
        })
    }
})

export default slice.reducer;