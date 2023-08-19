import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import PinterestIcon from '@mui/icons-material/Pinterest'

import "./Contact.scss"

const Contact = () => {
  return (
    <div className='contact'>

        <div className="wrapper">

            <span className='title'>BE IN TOUCH WITH US:</span>

            <div className="mail">
                
                <input type="email" placeholder='Enter your e-mail...' />
                <button className='btn'>JOIN US</button>

            </div>

            <div className="icons">
                <FacebookIcon className='contactIcon' />
                <InstagramIcon className='contactIcon' />
                <TwitterIcon className='contactIcon' />
                <GoogleIcon className='contactIcon' />
                <PinterestIcon className='contactIcon' />
            </div>

        </div>

    </div>
  )
}

export default Contact