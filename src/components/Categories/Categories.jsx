import React from 'react'

import "./Categories.scss"

import { Link } from "react-router-dom"

import category1 from "../../img/Categories/category-1.webp"
import category2 from "../../img/Categories/category-2.jpg"
import category3 from "../../img/Categories/category-3.jpg"
import category4 from "../../img/Categories/category-4.webp"
import category5 from "../../img/Categories/category-5.jpg"
import category6 from "../../img/Categories/category-6.jpg"

const Categories = () => {
    return (
        <div className='categories'>

            <div className="col">
                <div className="row">

                    <img src={category1} alt="category1" />
                    <button className='btn'>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>

                </div>

                <div className="row">

                    <img src={category2} alt="category2" />
                    <button className='btn'>
                        <Link className="link" to="/products/1">Women</Link>
                    </button>

                </div>
            </div>



            <div className="col">
                <div className="row">

                    <img src={category3} alt="category3" />
                    <button className='btn'>
                        <Link className="link" to="/products/1">New Season</Link>
                    </button>

                </div>
            </div>



            <div className="col col-l">

                <div className="row">

                    <div className="col">
                        <div className="row">

                            <img src={category4} alt="category4" />
                            <button className='btn'>
                                <Link className="link" to="/products/1">Men</Link>
                            </button>

                        </div>
                    </div>


                    <div className="col">
                        <div className="row">

                            <img src={category5} alt="category5" />
                            <button className='btn'>
                                <Link className="link" to="/products/1">Accessories</Link>
                            </button>

                        </div>
                    </div>

                </div>


                <div className="row">

                    <img src={category6} alt="category6" />
                    <button className='btn'>
                        <Link className="link" to="/products/1">Shoes</Link>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Categories