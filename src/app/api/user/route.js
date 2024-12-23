import { NextResponse } from "next/server";
import {connectionString} from "../../../sqlDbConnection/db";
import {User} from "../../../sqlDbConnection/model/user";
import mongoose from "mongoose";

export async function POST(request){
    let requestData = await request.json();
    await mongoose.connect(connectionString);
    let getAllUserData = await User.find();
    let responseData = getAllUserData.filter((element)=> element.name == requestData.username && element.password == requestData.password);
    let responseData1= (responseData.length > 0) ? {response: responseData[0], success: true} : {response: 'no record found', success: false}
    return NextResponse.json(responseData1 ,{status: 200})
}