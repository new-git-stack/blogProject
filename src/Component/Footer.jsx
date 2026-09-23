import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import "./Footer.css"
import domi from "../assets/dom.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";


function Footer(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubscribe = (e) => {
      e.preventDefault();
  
      // Simulate subscription logic
      console.log(`Subscribed: ${email}`);
      setMessage('🎉 Subscribed successfully!');
      setEmail('');
    };
    return(
        <>
    <div class="container-fluid mt-1 bg-dark py-5">
        {/* <!-- Header --> */}
        <div class="text-center mb-4 bg-dark">
            <div class="newsletter-header text-light">NEWS 24</div>
            <div class="mb-3">
                <a href="mailto:info@news24@gmail.com" class="email-link text-light">info@news24@gmail.com</a>
            </div>
        </div>

        {/* <!-- Subscribe Section --> */}
        <div class="subscribe-section">
            <h3 class="mb-3 text-light">Subscribe to our newsletter</h3>
            {/* <div class="row g-3">
                <div class="col-md-8">
                    <input type="email" class="form-control" required placeholder="Enter your email..."/>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-primary w-100 " type="submit"><i className="bi bi-send text-info me-1 "></i>Subscribe</button>
                </div>

                <p class="text-light mt-2" id="message">We will never share your email with anyone else.</p>
            </div> */}

<div className="row g-3">
    <form onSubmit={handleSubscribe}>
    <div className="col-md-8">
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
            className="form-control"
        />
    </div>
        <div className="col-md-4">
            
        <button type="submit" className="btn btn-primary w-100">
        <i className="bi bi-send text-info me-1 "></i>
          Subscribe
        </button>
        </div>

      </form>
      {message && <p className=" text-light">{message}</p>}
    </div>
        </div>

        {/* <!-- Tagline --> */}
        <p class="tagline bg-black text-center mt-4 text-light">
         Checkout Our Newsletter To Get Latest Update With Email. 
        </p>

        {/* <!-- Footer Links --> */}
        <div class="footer-links cis mt-5 text-light">
            <div class="link-column">
                <h5 className="text-light">Page</h5>
                <ul>
                    <li>About</li>
                    <li>News</li>
                    <li>Authors</li>
                    <li>Subscriptions</li>
                    <li>Contact us</li>
                    <li>World News</li>
                </ul>
            </div>

            <div class="link-column">
                <h5>Resources</h5>
                <ul>
                    <Link to="/About" target="_top"className="text-light text-decoration-none"><li>PrivacyPolicy</li></Link>
                    <Link to="/About" target="_top" className="text-light text-decoration-none"><li>Terms&Conditions</li></Link>
                    <Link to="/About" target="_top"  className="text-light text-decoration-none"><li>License</li></Link>
                    
                    
                </ul>
            </div>

            <div className="container-fluid">
                <Link to=""><i className="bi bi-facebook m-2 text-info"></i></Link>
                <Link to=""><i className="bi bi-twitter m-2 text-info"></i></Link>
                <Link to=""><i className="bi bi-reddit m-2 text-info"></i></Link>
                <Link to=""><i className="bi bi-discord m-2 text-info"></i></Link>
                <Link to=""><i className="bi bi-youtube m-2 text-info"></i></Link>
                <Link to=""><i className="bi bi-behance m-2 text-info"></i></Link>



            </div>
        </div>
        <div className="container-fluid bg-dark text-light">&copy;Copyright reserved 2025. NEWS24 <br/> Condé Nast.  News24 may earn a portion of sales from products that are purchased through our site as part of our Affiliate Partnerships with retailers. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of blosom.</div>
    </div>
    </>
    );
};


export default Footer;
