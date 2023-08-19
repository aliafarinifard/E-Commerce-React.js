import React, { useState } from 'react'

import "./Products.scss";

import banner from "../../img/category-product-banner.png"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {

    const catId = parseInt(useParams().id)

    const [maxPrice, setMaxPrice] = useState(1000)

    const [sort, setSort] = useState(null)

    return (
        <div className='products'>

            <div className="left">

                <div className="filterItem">

                    <h2 className='title'>Product Categories</h2>

                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" id='2' value={2} />
                        <label htmlFor="2">Skirt</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" id='3' value={3} />
                        <label htmlFor="1">Coats</label>
                    </div>

                </div>


                <div className="filterItem">

                    <h2 className='title'>Filter by price</h2>

                    <div className="inputItem rangeContainer">
                        <span className='rangeSpan'>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span className='rangeSpan'>{maxPrice}</span>
                    </div>

                </div>


                <div className="filterItem">

                    <h2 className='title'>Sort by</h2>

                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort("asc")} />
                        <label htmlFor="asc">Price (Lower first)</label>
                    </div>

                    <div className="inputItem">
                        <input type="radio" id='desc' value='desc' name='price' onChange={(e) => setSort("desc")} />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>

                </div>



            </div>



            <div className="right">
                <img src={banner} alt="" className='catImg' />
                <List catId={catId} maxPrice={maxPrice} sort={sort} />
            </div>

        </div>
    )
}

export default Products