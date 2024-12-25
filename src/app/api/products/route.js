import { connectionString } from "@/sqlDbConnection/db";
import mongoose from "mongoose";
import {Products} from "@/sqlDbConnection/model/product";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionString);
    let responseData = await Products.find();
    return NextResponse.json({response : responseData, success : true},{status: 200})
}

export async function POST(request){
    await mongoose.connect(connectionString);
    let jsonData = await request.json();
    const responseData = await new Products(jsonData).save();
    return NextResponse.json({response : responseData, success : true},{status: 200})
}