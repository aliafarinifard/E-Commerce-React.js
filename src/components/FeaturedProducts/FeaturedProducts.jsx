import React from 'react'

import "./FeaturedProducts.scss"

import { products } from "../../dummyData"

import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {
    return (
        <div className='featuredProducts'>

            <div className="top">
                <h1 className='title'>{type} Products</h1>
                <p className='content'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti commodi,
                    mollitia libero distinctio vitae accusantium quaerat iste quam explicabo reiciendis 
                    voluptate, quidem voluptatem quisquam saepe id at suscipit porro nemo voluptatum ipsam! Tempora similique dicta non error sunt quisquam voluptas.
                </p>
            </div>


            <div className="bottom">
                {products.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>

        </div>
    )
}

export default FeaturedProducts