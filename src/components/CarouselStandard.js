import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import rightArrow from "../images/icons/right-arrow.svg"
import leftArrow from "../images/icons/left-arrow.svg"
import { useState, useEffect } from 'react';
import React from 'react';


  
  
  const CarouselStandard = ({ slides }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const CustomLeftArrow = ({ onClick }) => (
        <button className="custom-arrow left" onClick={onClick}>
          <img src={leftArrow} alt="Left Arrow" />
        </button>
      );
    
      const CustomRightArrow = ({ onClick }) => (
        <button className="custom-arrow right" onClick={onClick}>
          <img src={rightArrow} alt="Right Arrow" />
        </button>
      );
    
      const ButtonGroup = ({ next, previous, carouselState }) => (
        <div className="carousel-button-group">
          <CustomLeftArrow onClick={previous} className={carouselState.currentSlide === 0 ? 'disable' : ''} />
          <CustomRightArrow onClick={next} />
        </div>
      );
    
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1000);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const mobileSlides = slides.flatMap((slide, index) => {
      const childrenArray = React.Children.toArray(slide.props.children);
      const cardsWrapper = childrenArray.find(child => child.props.className === 'cards-wrapper');
  
      if (!cardsWrapper) return [];
  
      const cards = React.Children.toArray(cardsWrapper.props.children).filter(
        child => child.props.className.includes('card')
      );
  
      return cards.map((card, cardIndex) => (
        <div className="carousel-wrapper" key={`${index}-${cardIndex}`}>{card}</div>
      ));
    });
  
    const responsive = {
      desktop: { breakpoint: { max: 4000, min: 1000 }, items: 1 },
      mobile: { breakpoint: { max: 1000, min: 0 }, items: 1 },
    };
  
    return (
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          arrows={false}
          customButtonGroup={<ButtonGroup />}
          draggable
          infinite
          autoPlay={false}
        >
          {(isMobile ? mobileSlides : slides).map((slide, index) => (
            <div className="carousel-wrapper" key={index}>{slide}</div>
          ))}
        </Carousel>
      </div>
    );
  };
  
  export default CarouselStandard;