import React from 'react'
import clouds from "../images/icons/clouds.svg"
import CustomCarousel from './Carousel'


function StorySection() {
  return (
    <div className='cloud-section'>
        <div className='cloud-holder primary'>
            <img className='clouds' src={clouds} alt="Nori" />
            <h1 className='abs-title primary-text'>Povestea Mum’s Rolls</h1>
        </div>
        <div className='carousel padding-up-down'>
            <CustomCarousel />
        </div>
    </div>
  )
}

export default StorySection