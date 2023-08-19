import React from 'react'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import { products } from "../../dummyData"

import "./Cart.scss"

const Cart = () => {
  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {products.slice(0,2)?.map((item) => (
            <div className="item" key={item.id}>

                <img src={item.img} alt="" />

                <div className="details">
                    <h1>{item.title}</h1>
                    <p className='desc'>{item.desc?.substring(0, 100)}</p>
                    <div className="price">
                        1 x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='deleteIcon' />
            </div>
        ))}

        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>

        <button>PROCESS TO CHECKOUT</button>

        <span className='reset'>Reset Cart</span>

    </div>
  )
}

export default Cart