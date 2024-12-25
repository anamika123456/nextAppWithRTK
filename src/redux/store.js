import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice.js";
import productSlice from "./productSlice.js";
const store = configureStore({
    reducer :{
        usersReducer : userSlice,
        productsReducer : productSlice
    } 
}) 

export default store;