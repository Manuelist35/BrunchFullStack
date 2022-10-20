import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <div className='firstTextFooterLeft'><a href='/home'>Brunch<span className='firstHeart'><AiFillHeart/></span><span className='secondHeart'><AiFillHeart/></span><span className='thirdHeart'><AiFillHeart/></span></a></div>
                <div className='secondTextFooterLeft'><a href='/LocationScreen'>1147 Granville Street</a></div>
                <div className='thirdTextFooterLeft'><a href='/LocationScreen'>Vancouver, BC V6Z 1M1</a></div>
            </div>
            <div className='footerRight'>
                <span className="footerTextRight"><a href='https://www.instagram.com/brunchvancouver/'>Follow Us ;))  <FaInstagram className="iconFooter"/></a></span>
            </div>
        </div>
    )
}

export default Footer