import { connectionString } from "@/sqlDbConnection/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Products } from "@/sqlDbConnection/model/product";

export async function GET(request,content){
    await mongoose.connect(connectionString);
    let productId = await (content.params).productId ;
    let responseData = await Products.findById(productId);
    return NextResponse.json({response : responseData, success : true},{status: 200})
}

export async function DELETE(request,content){
    await mongoose.connect(connectionString);
    let productId = await (content.params).productId ;
    let responseData = await Products.findByIdAndDelete(productId);
    return NextResponse.json({response : responseData, success : true},{status: 200})
}

export async function PUT(request,content){
    await mongoose.connect(connectionString);
    console.log(request,'innnnn22221112', content)
    let updatedJson = await request.json(); 
    let productId = await (content.params).productId ;
    console.log(productId,'innnnn2222', updatedJson)
    let responseData = await Products.findByIdAndUpdate(productId, updatedJson);
    return NextResponse.json({response : responseData, success : true},{status: 200})
}