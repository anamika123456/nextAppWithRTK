"use client"
import { useState } from "react";
import * as userServices from "../../plugins/userServices"
import { useRouter } from "next/navigation";
export default function Page(){
    const router = useRouter();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const login=async()=>{
        let sendRequestJson = {username, password};
        let responseData = await userServices.login(sendRequestJson);
        if(responseData){
            // router.push('/home')
            alert(' username or password')
        }else{
            alert('invalid username or password')
        }
    }
    return(
        <div className="container-md">
            <h3 className="text-center my-3">Login Form</h3>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={username || ''} onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Pasword</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={password || ''} onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div className="mb-3 d-md-flex justify-content-md-center">
                <button  className="btn btn-primary mx-3" type="button" onClick={login}>Submit</button>
            </div>
        </div>
    );
}