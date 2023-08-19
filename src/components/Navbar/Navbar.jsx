import React, { useState } from 'react'

import "./Navbar.scss";

import { Link } from "react-router-dom";

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import Cart from '../Cart/Cart';

import en from "../../img/en.png";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className='navbar'>

            <div className="wrapper">

                <div className="left">

                    <div className="item">
                        <MenuOutlinedIcon className='menuIcon' />
                    </div>

                    <div className="item lang">
                        <img src={en} alt="en" />
                        <KeyboardArrowDownIcon />
                    </div>

                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>

                    <div className="item dnItem">
                        <Link className="link" to="/products/3">Children</Link>
                    </div>

                    <div className="item accessoryItem">
                        <Link className="link" to="/products/4">Accessories</Link>
                    </div>

                </div>


                <div className="center">
                    <Link className="link" to="/">Store</Link>
                </div>


                <div className="right">

                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>

                    <div className="item dnItem">
                        <Link className="link" to="/">Stores</Link>
                    </div>

                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon className='personIcon' />
                        <FavoriteBorderOutlinedIcon className='favoriteIcon' />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>

                </div>

            </div>

            {open && <Cart />}

        </header>
    )
}

export default Navbar