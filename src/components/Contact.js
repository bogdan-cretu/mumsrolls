import React from 'react'
import wave from "../images/icons/wave.svg"
import instagram from "../images/icons/instagram.svg"
import facebook from "../images/icons/facebook.svg"
import tiktok from "../images/icons/tiktok.svg"
import phone from "../images/icons/phone.svg"
import whatsapp from "../images/icons/whatsapp.svg"
import ContactForm from './Form'


function Contact() {
  return (
    <div id='contact'>
    <img className='wave' src={wave} alt=''></img>
    <h1 className='title primary-text'> Hai să ne auzim!</h1>
    <div className='small-card-holder'>
        <div className='small-card primary'>
            <h3>Urmăriți-mă pe social:</h3>
            <a href=''><img className='icon' src={instagram} alt=''></img></a>
            <a href=''><img className='icon' src={facebook} alt=''></img></a>
            <a href=''><img className='icon' src={tiktok} alt=''></img></a>
        </div>
        <div className='small-card primary'>
            <h3>Urmăriți-mă pe social:</h3>
            <a className='custom-link' href='tel:0726807786'><img className='icon-small' src={phone} alt=''></img><span>0726 807 786</span></a>
            <h3>Sau scrieți-mi direct pe Whatsapp</h3>
            <a href=''><img className='icon' src={whatsapp} alt=''></img></a>
        </div>
        <div className='small-card primary'>
            <h3>Formular Contact</h3>
            <ContactForm />
        </div>
    </div>
    </div>
  )
}

export default Contact