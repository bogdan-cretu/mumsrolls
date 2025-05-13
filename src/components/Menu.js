
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



const slides3 = [
    <div className="slide">
        <div className="cards-wrapper">
            <div className='card'>
                <p className='primary-text card-title'>Brr-ad Pitt</p>
                <p className='small-text primary-text'>Gelato, Kinder Bueno</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsVanilla} alt='inghetata de vanilie'></img>
                    <img className='card-small-image' src={aromaVanilla} alt='aroma'></img>
                </div>
            </div>
            <div className='card'>
                <p className='primary-text card-title'>Oreo Depp</p>
                <p className='small-text primary-text'>Gelato, Oreo</p>
                    <div className='image-holder'>
                        <img className='card-image' src={rollsChocolate} alt='inghetata de ciocolata'></img>
                        <img className='card-small-image' src={aromaChocolate} alt='aroma'></img>
                    </div>
            </div>
        </div>    
    </div>,
  ];

const slides2 = [
    <div className="slide">
        <div className="cards-wrapper">
            <div className='card'>
                <p className='primary-text card-title'>Banana Bailey's Shake</p>
                <p className='small-text primary-text'>Gelato, Banană, Bailey's, Biscuiți</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsVanilla} alt='inghetata de vanilie'></img>
                    <img className='card-small-image' src={aromaVanilla} alt='aroma'></img>
                </div>
            </div>
            <div className='card'>
                <p className='primary-text card-title'>Wake Up and Kahlua</p>
                <p className='small-text primary-text'>Gelato, Espresso, Kahlua</p>
                    <div className='image-holder'>
                        <img className='card-image' src={rollsChocolate} alt='inghetata de ciocolata'></img>
                        <img className='card-small-image' src={aromaChocolate} alt='aroma'></img>
                    </div>
            </div>
            <div className='card'>
                <p className='primary-text card-title'>Amarula Berry Bliss</p>
                <p className='small-text primary-text'>Gelato, Amarula, Fructe de pădure</p>
                    <div className='image-holder'>
                        <img className='card-image' src={rollsForrest} alt='inghetata de fructe de padure'></img>
                        <img className='card-small-image' src={aromaForrest} alt='aroma'></img>
                    </div>
            </div>
            
        </div>    
    </div>,
  ];

  const slides1 = [
    <div className="slide">
        <div className="cards-wrapper">
            <div className='card'>
                <p className='primary-text card-title'>Popcorn Peanut Jam</p>
                <p className='small-text primary-text'>Gelato, Unt de arahide, Gem de vișine, Popcorn proaspăt</p>
                <div className='image-holder'>
                    <img className='card-image' src={rollsVanilla} alt='inghetata de vanilie'></img>
                    <img className='card-small-image' src={aromaVanilla} alt='aroma'></img>
                </div>
            </div>
            <div className='card'>
                <p className='primary-text card-title'>Berry Mania</p>
                <p className='small-text primary-text'>Gelato, Fructe de pădure</p>
                    <div className='image-holder'>
                        <img className='card-image' src={rollsChocolate} alt='inghetata de ciocolata'></img>
                        <img className='card-small-image' src={aromaChocolate} alt='aroma'></img>
                    </div>
            </div>
            <div className='card'>
                <p className='primary-text card-title'>Banana Nutella Craze</p>
                <p className='small-text primary-text'>Gelato, Banană, Nutella, Biscuiți</p>
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
                    <p className='primary-text card-title'>Raffaelo Dream</p>
                    <p className='small-text primary-text'>Gelato, Nucă, Biscuiți, Nucă de cocos</p>
                        <div className='image-holder'>
                            <img className='card-image' src={rollsForrest} alt='inghetata de fructe de padure'></img>
                            <img className='card-small-image' src={aromaForrest} alt='aroma'></img>
                        </div>
            </div>
            <div className='card'>
                <p className='primary-text card-title'>Mama's Secret Brownie</p>
                <p className='small-text primary-text'>Gelato, Negresă făcută acasă</p>
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
                <Tab onMouseDown={(e) => e.preventDefault()}>PICII ALEG, NOI RULĂM</Tab>
                <Tab onMouseDown={(e) => e.preventDefault()}>DUPĂ "DA!" URMEAZĂ HA! HA! HA!</Tab>
                <Tab onMouseDown={(e) => e.preventDefault()}>CELEBRITĂȚI ÎNGHEȚATE</Tab>
            </TabList>
            <img className='menu-image' id='right-image' src={icecreamForrest} alt=''></img>
        </div>
            <TabPanel>
                <CarouselStandard slides={slides1} />
            </TabPanel>
            <TabPanel>
                <CarouselStandard slides={slides2} />
            </TabPanel>
            <TabPanel>
                <CarouselStandard slides={slides3} />
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