import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import rightArrow from "../images/icons/right-arrow.svg"
import leftArrow from "../images/icons/left-arrow.svg"


const CarouselGeneric = ({ slides }) => {
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

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
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
        {slides.map((slide, index) => (
          <div className="carousel-wrapper" key={index}>{slide}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselGeneric;
