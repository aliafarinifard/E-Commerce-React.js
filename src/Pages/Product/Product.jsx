import React, { useState } from 'react'

import product1 from "../../img/Product/product-1.webp"
import product2 from "../../img/Product/product-2.webp"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

import "./Product.scss";

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        product1,
        product2
    ]

    return (
        <div className='product'>

            <div className="left">

                <div className="images">
                    <img src={images[0]} alt="product-1" className='productImg' onClick={(e) => setSelectedImg(0)} />
                    <img src={images[1]} alt="product-2" className='productImg' onClick={(e) => setSelectedImg(1)} />
                </div>

                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" className='bigImg' />
                </div>

            </div>



            <div className="right">

                <h1>Title</h1>
                <span className='price'>$199</span>
                <p className='content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore dicta sit vero, corporis unde. Quidem, commodi! Esse quam illo expedita doloribus enim dicta possimus eligendi at, inventore omnis beatae cupiditate reiciendis eveniet sint laudantium veritatis nam! Atque, deserunt doloribus.
                </p>

                <div className="quantity">
                    <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>

                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>

                <div className="links">

                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISHLIST
                    </div>

                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>

                </div>

                <div className="info">
                    <span>Vendor : Polo</span>
                    <span>Product Type : T-Shirt</span>
                    <span>Tag : T-Shirt, Women, Top</span>
                </div>

                <hr />

                <div className="info">

                    <span>Description</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>

                </div>

            </div>

        </div>
    )
}

export default Product