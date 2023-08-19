import React from 'react'

import "./Footer.scss";

import payment from "../../img/payment.png";

const Footer = () => {
    return (
        <div className='footer'>

            <div className="top">

                <div className="item">
                    <h1>Categories</h1>
                    <span className='itemLink'>Women</span>
                    <span className='itemLink'>Men</span>
                    <span className='itemLink'>Shoes</span>
                    <span className='itemLink'>Accessories</span>
                    <span className='itemLink'>New Arrivals</span>
                </div>


                <div className="item">
                    <h1>Links</h1>
                    <span className='itemLink'>Faq</span>
                    <span className='itemLink'>Pages</span>
                    <span className='itemLink'>Stores</span>
                    <span className='itemLink'>Compare</span>
                    <span className='itemLink'>Cookies</span>
                </div>


                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptas corporis ex consequuntur vero totam eaque illum quae asperiores quaerat veritatis rem nobis laudantium veniam ipsam, debitis doloremque iusto fugiat?
                    </span>
                </div>


                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam labore aliquid, blanditiis facere qui ipsum dolor. Rem corrupti nesciunt officiis consectetur nobis unde fuga dolore, exercitationem eveniet accusantium quos repellendus.
                    </span>
                </div>

            </div>



            <div className="bottom">

                <div className="left">
                    <span className='logo'>Store</span>
                    <span className='copyright'>&copy; Created By Ali Afarinifard. All Rights Reserved!</span>
                </div>

                <div className="right">
                    <img src={payment} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Footer