import Slider from 'react-slick';
import small4 from '../assets/slide3.jpg'; // Update this path based on your file structure

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100 h-100">
        <Slider {...settings}>
          <div>
            <img className="d-block w-100 h-100" src={small4} alt="First slide" />
          </div>
          <div>
            <img className="d-block w-100 h-100" src={small4} alt="Second slide" />
          </div>
          <div>
            <img className="d-block w-100 h-100" src={small4} alt="Third slide" />
          </div>
          {/* Add more slides here */}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
