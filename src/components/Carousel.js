import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css"; 

import rightArrow from "../images/icons/right-arrow.svg"
import heart from "../images/icons/heart.svg"
import swirl from "../images/icons/swirl.svg"
import leftArrow from "../images/icons/left-arrow.svg"
import avocado from "../images/icons/avocado.svg"
import cherry from "../images/icons/cherry.svg"
import lemon from "../images/icons/lemon.svg"
import pear from "../images/icons/pear.svg"
import banana from "../images/icons/banana.svg"
import fulllemon from "../images/icons/fulllemon.svg"
import orange from "../images/icons/orange.svg"
import strawberry from "../images/icons/strawberry.svg"
import watermelon from "../images/icons/watermelon.svg"
import kiwi from "../images/icons/kiwi.svg"
import question1 from "../images/icons/question1.svg"
import question2 from "../images/icons/question2.svg"
import question3 from "../images/icons/question3.svg"
import question4 from "../images/icons/question4.svg"
import question5 from "../images/icons/question5.svg"

const CustomCarousel = () => {
  const slides = [
    <div className="slide">
        <div className="slide-wrapper">
            <div className="icons-holder-vertical">
                <img className="icon" src={swirl} alt="" style={{marginLeft:'-70px'}}></img>
                <img className="icon" src={heart} alt="" style={{marginLeft:'60px'}}></img>
                <img className="icon" src={swirl} alt=""></img>
                <img className="icon" src={heart} alt="" style={{marginLeft:'-55px'}}></img>
            </div>
            <div className="card primary padding-global" >
                <h3 className="h3">Din <span className="secondary-text">Dragoste</span> pentru Tudor, cu Grijă pentru Pitici și Adulți</h3>
                <p className="small-text">Mum’s Rolls s-a născut dintr-o poveste simplă, dar plină de iubire. Totul a început cu Tudor, inspirația noastră – un mic explorator cu poftă de viață și dorința de a descoperi bucuria în fiecare moment. Din dorința de a-i oferi deserturi sănătoase, naturale și delicioase, Mariuca, mama lui, a transformat o simplă idee într-o experiență care să încânte atât piticii, cât și adulții.</p>
            </div>
            <div className="icons-holder-vertical">
                <img className="icon" src={heart} alt="" style={{marginLeft:'0px'}}></img>
                <img className="icon" src={swirl} alt="" style={{marginLeft:'30px'}}></img>
                <img className="icon" src={heart} alt="" style={{marginLeft:'55px'}}></img>
            </div>
        </div>
        <div className="icons-holder">
            <img className="icon" src={swirl} alt="" style={{marginTop:'10px'}}></img>
            <img className="icon" src={heart} alt="" style={{marginTop:'40px'}}></img>
            <img className="icon" src={swirl} alt="" style={{marginTop:'55px'}}></img>
            <img className="icon" src={heart} alt="" style={{marginTop:'10px'}}></img>
        </div>
    </div>
    ,
    <div className="slide primary" >
        <div className="slide-wrapper">
            <div className="icons-holder-vertical align-end">
                <img className="icon" src={lemon} alt=""></img>
                <img className="icon" src={pear} alt=""></img>
                <img className="icon" src={cherry} alt=""></img>
                <img className="icon" src={avocado} alt=""></img>
            </div>
            <div className="card primary padding-global" >
                <h3 className="h3">Delicii <span className="secondary-text">Sănătoase</span>, Făcute cu Dragoste</h3>
                <p className="small-text">Cu mâini grijulii și un zâmbet cald, Mariuca prepară fiecare ruladă de înghețată folosind ingrediente naturale, atent alese. Fiecare combinație este o armonie perfectă între gusturi autentice, prospețime și sănătate <br></br>– un desert care îți aduce aminte de momentele copilăriei.</p>
            </div>
            <div className="icons-holder-vertical ">
                <img className="icon" src={lemon} alt=""></img>
                <img className="icon" src={pear} alt=""></img>
                <img className="icon" src={cherry} alt=""></img>
                <img className="icon" src={avocado} alt=""></img>
            </div>
        </div>
        <div className="icons-holder justify-center">
            <img className="icon" src={banana} alt="" ></img>
            <img className="icon" src={fulllemon} alt="" ></img>
            <img className="icon" src={orange} alt="" ></img>
            <img className="icon" src={kiwi} alt="" ></img>
            <img className="icon" src={strawberry} alt="" ></img>
            <img className="icon" src={watermelon} alt="" ></img>
            <img className="icon" src={strawberry} alt="" ></img>
            <img className="icon" src={kiwi} alt="" ></img>
            <img className="icon" src={orange} alt="" ></img>
            <img className="icon" src={fulllemon} alt="" ></img>
            <img className="icon" src={banana} alt="" ></img>
        </div>
    </div>,
    <div className="slide" >
        <div className="slide-wrapper">
            <div className="icons-holder-vertical no-gap">
                <img className="icon icon-small" src={question1} alt="" style={{marginLeft:'-20px'}}></img>
                <img className="icon icon-small" src={question2} alt="" style={{marginLeft:'60px'}}></img>
                <img className="icon icon-small" src={question3} alt=""></img>
                <img className="icon icon-small" src={question4} alt="" style={{marginLeft:'-25px'}}></img>
                <img className="icon icon-small" src={question5} alt="" style={{marginLeft:'55px'}}></img>
            </div>
            <div className="card padding-global" >
                <h3 className="h3">De ce <span className="secondary-text">Mum's Rolls</span>?</h3>
                <p className="small-text">Pentru că fiecare ruladă este făcută cu dragoste, exact ca pentru cei dragi. Fie că ești un mic pofticios sau un adult care caută ceva special, Mum’s Rolls este modul ideal de a te bucura de un desert care sǎ-ți mângâie sufletul și te face să te facǎ sǎ te lingi pe degete.<br></br><br></br>Cu fiecare înghițitură, îți promitem o experiență dulce, unicǎ și plină de momente memorabile – pentru tine și pentru toți cei care iubesc deserturile făcute cu grijă și suflet. </p>
            </div>
            <div className="icons-holder-vertical no-gap">
                <img className="icon icon-small" src={question1} alt="" style={{marginLeft:'-20px'}}></img>
                <img className="icon icon-small" src={question2} alt="" style={{marginLeft:'60px'}}></img>
                <img className="icon icon-small" src={question3} alt=""></img>
                <img className="icon icon-small" src={question4} alt="" style={{marginLeft:'-25px'}}></img>
                <img className="icon icon-small" src={question5} alt="" style={{marginLeft:'55px'}}></img>
            </div>
        </div>
    </div>,
  ];

  const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-arrow left" id="arrow" onClick={() => { onClick(); }}>
      <img src={leftArrow} alt="Left Arrow" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button className="custom-arrow right" onClick={onClick}>
      <img src={rightArrow} alt="Right Arrow" />
    </button>
  );

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    
    return (
      <div className="carousel-button-group">
        <CustomLeftArrow
          onClick={previous} 
          className={currentSlide === 0 ? 'disable' : ''}
        />
        
        <CustomRightArrow
          onClick={next} 
        />
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        arrows={false} 
        customButtonGroup={<ButtonGroup />}  
        draggable={true} 
        infinite={true}  
        autoPlay={false}  
      >
        {slides.map((slide, index) => (
          <div className="carousel-wrapper" key={index}>{slide}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
