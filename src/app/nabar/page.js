"use client"
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {logout} from "../../redux/slice";
import { useDispatch } from "react-redux";

export default function Navbar(){
    const pathname = usePathname()
    const dispatch = useDispatch();
    const router = useRouter();
    const logoutFunc = ()=>{
        let responseData = dispatch(logout('logout'));
        console.log(responseData)
        router.push('/')
    }
    return (
        <>{ pathname !== '/' ? <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/home">Product App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link ${pathname === '/home'? ' active' : ''}`}  aria-current="page" href="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${pathname === '/products'? ' active' : ''}`} href="/products">Products</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${pathname === '/uploadFile'? ' active' : ''}`} href="/uploadFile">Upload File</Link>
                </li>
            </ul>
                <button className="btn btn-outline-success" type="button" onClick={logoutFunc}>LogOut</button>
            
            </div>
        </div>
        </nav> :null} </>
    );
}