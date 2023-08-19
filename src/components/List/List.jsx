import React from 'react'

import { products } from "../../dummyData"

import Card from "../Card/Card"

import "./List.scss"

const List = () => {
  return (
    <div className='list'>
        {products?.map((item) => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List