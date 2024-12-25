"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {login} from "../../redux/slice";
export default function Page(){
    const router = useRouter();
    const dispatch = useDispatch();
    const [users, setUsers] = useState({});
    const getUserData=(e)=>{
        setUsers({...users, [e.target.name]: e.target.value});
    }
    const loginFunc=()=>{
        let responseData = dispatch(login(users))
        // console.log('login responseData ===>',responseData.PromiseState)
        router.push('/home')
        // let responseData = await userServices.login(sendRequestJson);
        // if(responseData.payload){
        //     alert(' username or password')
        // }else{
        //     alert('invalid username or password')
        // }
    }
    return(
        <div className="container-md">
            <h3 className="text-center my-3">Login Form</h3>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="username" onChange={getUserData} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Pasword</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" name="password" onChange={getUserData} />
            </div>
            <div className="mb-3 d-md-flex justify-content-md-center">
                <button  className="btn btn-primary mx-3" type="button" onClick={loginFunc}>Submit</button>
            </div>
        </div>
    );
}