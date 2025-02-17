import React from 'react'
import Navbar from './Navbar'
import headerImage from "../images/pictures/header-image.png";
import arrow from "../images/icons/sageata.svg";
import { scrollToSection } from '../App';

function Header() {
  return (
    <div className='primary'>
        <Navbar />
        <div className='header-wrapper padding-global'>
            <h1>Descoperă Răsfățul Perfect: Mum’s Rolls </h1>
            <div className='header-image-holder'>
                <img className='header-image' src={headerImage} alt="Inghetata mum rolls" />
                <div className='header-action'>
                    <img className='arrow' src={arrow} alt="sageata" />
                    <button onClick={() => scrollToSection("contact")} className='btn-standard secondary'>Alege acum să ai amintiri delicioase</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header