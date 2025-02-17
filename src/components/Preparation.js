import React from 'react'
import waveWhite from "../images/icons/wave-white.svg"
import symbolsLeft from "../images/icons/symbols-left.svg"
import symbolsRight from "../images/icons/symbols-right.svg"
import step1 from "../images/pictures/step1.jpg"
import step2 from "../images/pictures/step2.jpg"
import step3 from "../images/pictures/step3.jpg"
import step4 from "../images/pictures/step4.jpg"
import step5 from "../images/pictures/step5.jpg"
import step6 from "../images/pictures/step6.jpg"
import CarouselGeneric from './CarouselGeneric'

const slides1 = [
    <div className="slide">
        <div className="steps-wrapper">
            <div className='images-holder'>
                <img className='icon-symbols' src={symbolsRight} alt=''></img>
                <img className='prep-image' src={step1} alt=''></img>
                <img className='icon-symbols' src={symbolsLeft} alt=''></img>
            </div>
            <p className='tag-line'><span className='secondary-text'>Pasul 1: </span>Turnăm crema pe plită</p>
        </div>       
    </div>,
    <div className="slide">
        <div className="steps-wrapper">
            <div className='images-holder'>
                <img className='icon-symbols' src={symbolsRight} alt=''></img>
                <img className='prep-image' src={step2} alt=''></img>
                <img className='icon-symbols' src={symbolsLeft} alt=''></img>
            </div>
            <p className='tag-line'><span className='secondary-text'>Pasul 2: </span>Amestecăm crema</p>
        </div>       
    </div>,
    <div className="slide">
        <div className="steps-wrapper">
            <div className='images-holder'>
                <img className='icon-symbols' src={symbolsRight} alt=''></img>
                <img className='prep-image' src={step3} alt=''></img>
                <img className='icon-symbols' src={symbolsLeft} alt=''></img>
            </div>
            <p className='tag-line'><span className='secondary-text'>Pasul 3: </span>Începem să facem rulourile</p>
        </div>       
    </div>,
    <div className="slide">
        <div className="steps-wrapper">
            <div className='images-holder'>
                <img className='icon-symbols' src={symbolsRight} alt=''></img>
                <img className='prep-image' src={step4} alt=''></img>
                <img className='icon-symbols' src={symbolsLeft} alt=''></img>
            </div>
            <p className='tag-line'><span className='secondary-text'>Pasul 4: </span>Rulăm până terminăm crema</p>
        </div>       
    </div>,
    <div className="slide">
        <div className="steps-wrapper">
            <div className='images-holder'>
                <img className='icon-symbols' src={symbolsRight} alt=''></img>
                <img className='prep-image' src={step5} alt=''></img>
                <img className='icon-symbols' src={symbolsLeft} alt=''></img>
            </div>
            <p className='tag-line'><span className='secondary-text'>Pasul 5: </span>Asezăm totul în cupa Mum’s Rolls</p>
        </div>       
    </div>,
    <div className="slide">
        <div className="steps-wrapper">
            <div className='images-holder'>
                <img className='icon-symbols' src={symbolsRight} alt=''></img>
                <img className='prep-image' src={step6} alt=''></img>
                <img className='icon-symbols' src={symbolsLeft} alt=''></img>
            </div>
            <p className='tag-line'><span className='secondary-text'>Pasul 6: </span> Adaugăm toping-urile favorite</p>
        </div>       
    </div>,
  ];





function Preparation() {
  return (
    <div className='prep-section primary'>
        <img src={waveWhite} alt=''></img>
        <div className='heading'></div>
        <h1 className='text-align-center'>Procesul de preparare</h1>
        <p className='text-align-center'>Creat cu dragoste și atenție, chiar în fața ta!</p>
        <CarouselGeneric slides={slides1} />
    </div>
  )
}

export default Preparation