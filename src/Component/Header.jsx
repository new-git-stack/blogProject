import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import "./Header.css"
import Home from "../Pages/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tech from "../assets/tech.jpg";
import finance from "../assets/finance.jpg";
function Header(){
    return(
        <>
            <nav className="navbar navbar">
                <div className="container-fluid">
                   <div className="navbar-brand">
                    <span className="text-dark fs-3 fw-bold ms-2">NEWS 24</span>
                   </div>

               
                <ul className="nav nav-tabs">
                    <li className="nav-item"><Link  to="/" target="_blank" className="nav-link text-dark "> Home</Link> </li>
                    <li className="nav-item"><Link  to="/Lifestyle" target="_blank" className="nav-link text-dark"> Lifestyle</Link> </li>
                    <li className="nav-item"><Link  to="Finance" target="_blank" className="nav-link text-dark"> Finance</Link> </li>
                    <li className="nav-item"><Link  to="/Tech" target="_blank" className="nav-link text-dark"> Tech</Link> </li>
                    <li className="nav-item"><Link  to="/Security" target="_blank" className="nav-link text-dark"> Security</Link> </li>
                    <li className="nav-item"><Link  to="/About" target="_blank" className="nav-link text-dark"> About us</Link> </li>
                </ul>
                </div>
            </nav>
            <div className="container-fluid p-0">
                <h1 className="text-center fonte  bg-dark text-light mx-0 my-0">NEWS 24</h1>
            </div>
           

            <div className="boxContainer bg-dark">
                <Link to="Security" className="text-decoration-none">
                <div className="boxLeft">
                    <div className="card-body">
                        <div className="card-title"><h1>engage in today's latest news on world conflict</h1></div>
                        <div className="card-text">World conflict continues to shape global headlines, with tensions rising in key regions due to political, economic, and military disputes. Ongoing wars, power struggles, and humanitarian crises highlight the urgent need for international cooperation and peaceful solutions.
                        </div>
                    </div>
                </div>
                </Link>


                <div className="boxRight bg-dark ">

                <Link to="finance" className="text-decoration-none">
                 <div className="boxTop">

                    <div className="card-bodi">
                        <div className="card-titli p-1"><h1>Something Big Is Happening with Money — Are You In?</h1></div>
                        <div className="card-texti p-1">From hidden saving tricks to real-time investment insights, our finance platform is changing how smart people grow their wealth. Don’t get left behind.</div>
                    </div>

                </div>
                </Link>

                <Link to="Tech" className="text-decoration-none">
                <div className="boxBottom">
                        <div className="card-bodi2 ms-1">
                            <div className="card-titli2 fs-3"><h3>Tech Is Moving Fast — Are You Keeping Up?.</h3></div>
                            <div className="card-texti2 pb-2">AI, web3, automation… the future isn’t coming — it’s already here. Our platform gives you the edge to stay ahead, build smarter, and create what’s next.</div>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        
        </>
    );
};


export default Header;



{/* <div className="col-md-6 mb-3 ">
<div className="card right-top">
    
</div>
</div> */}
