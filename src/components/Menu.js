
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CarouselStandard from "./CarouselStandard";
import wave from "../images/icons/wave.svg"
import icecream from "../images/pictures/inghetata.jpg"
import icecreamForrest from "../images/pictures/inghetata-fructe-padure.jpg"
import rollsChocolate from "../images/pictures/rolls-ciocolata.jpg"
import rollsVanilla from "../images/pictures/rolls-vanilie.jpg"
import rollsForrest from "../images/pictures/rolls-fructe-de-padure.jpg"
import aromaVanilla from "../images/pictures/vanilie.png"
import aromaChocolate from "../images/pictures/ciocolata.png"
import aromaForrest from "../images/pictures/fructePadure.png"
import arrowRight from "../images/icons/drawn-arrow-right.svg"
import arrowLeft from "../images/icons/drawn-arrow-left.svg"
import { scrollToSection } from '../App';



const slides1 = [
    <div className="slide">
        <div className="cards-wrapper">
            <div className='card'>
                <p className='primary-text card-title'>Vanilie</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsVanilla} alt='inghetata de vanilie'></img>
                    <img className='card-small-image' src={aromaVanilla} alt='aroma'></img>
                </div>
            </div>
            <div className='card'>
            <p className='primary-text card-title'>Ciocolata</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsChocolate} alt='inghetata de ciocolata'></img>
                    <img className='card-small-image' src={aromaChocolate} alt='aroma'></img>
                </div>
            </div>
            <div className='card'>
            <p className='primary-text card-title'>Fructe de padure</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsForrest} alt='inghetata de fructe de padure'></img>
                    <img className='card-small-image' src={aromaForrest} alt='aroma'></img>
                </div>
            </div>
        </div>       
    </div>,
    <div className="slide">
        <div className="cards-wrapper">
            <div className='card'>
                <p className='primary-text card-title'>Vanilie</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsVanilla} alt='inghetata de vanilie'></img>
                    <img className='card-small-image' src={aromaVanilla} alt='aroma'></img>
                </div>
            </div>
            <div className='card'>
            <p className='primary-text card-title'>Ciocolata</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsChocolate} alt='inghetata de ciocolata'></img>
                    <img className='card-small-image' src={aromaChocolate} alt='aroma'></img>
                </div>
            </div>
            <div className='card'>
            <p className='primary-text card-title'>Fructe de padure</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsForrest} alt='inghetata de fructe de padure'></img>
                    <img className='card-small-image' src={aromaForrest} alt='aroma'></img>
                </div>
            </div>
        </div>       
    </div>,
  ];

function Menu() {
  return (
    <div className='menu-section'>
        <img className='wave' src={wave} alt=""></img>
        <h1 className='title primary-text'>Meniu</h1>
        <Tabs>
        <div className='menu-wrapper'>
            <img className='menu-image' id='icecream' src={icecream} alt=''></img>
            <TabList className='menu-tabs'>
                <Tab onMouseDown={(e) => e.preventDefault()}>Clasic</Tab>
                <Tab onMouseDown={(e) => e.preventDefault()}>Exotic</Tab>
                <Tab onMouseDown={(e) => e.preventDefault()}>Specialitati sezoniere</Tab>
            </TabList>
            <img className='menu-image' id='right-image' src={icecreamForrest} alt=''></img>
        </div>
            <TabPanel>
                <CarouselStandard slides={slides1} />
            </TabPanel>
            <TabPanel>
                <CarouselStandard slides={slides1} />
            </TabPanel>
            <TabPanel>
                <CarouselStandard slides={slides1} />
            </TabPanel>
        </Tabs>
        <div className='cta-holder'>
            <img className='icon-large' src={arrowRight} alt=''></img>
            <button onClick={() => scrollToSection("contact")} className='btn-standard secondary'>Vezi mai multe arome</button>
            <img className='icon-large' src={arrowLeft} alt=''></img>
        </div>
    </div>
  )
}

export default Menu