'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderInside = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="slider-container  ">
        <div  className=" w-[400px] h-72">
          <Slider  {...settings}>
            <div className="w-[400px] h-[250px] bg-blue-500 flex justify-center items-center">
              <div>1</div>
            </div>
            <div className="md:slider_img w-64 h-10 md:bg-yellow-500 bg-red-300 flex justify-center items-center">
              <div>2</div>
            </div>
            <div className="w-80 h-64 bg-blue-500 flex justify-center items-center">
              <div>3</div>
            </div>
            <div className="w-80 h-64 bg-red-300 flex justify-center items-center">
              <div>4</div>
            </div>
            <div className="w-80 h-64 bg-blue-500 flex justify-center items-center">
              <div>5</div>
            </div>
            <div className="w-80 h-64 bg-red-300 flex justify-center items-center">
              <div>6</div>
            </div>
            <div className="w-80 h-64 bg-blue-500 flex justify-center items-center">
              <div>7</div>
            </div>
            <div className="w-80 h-64 bg-red-300 flex justify-center items-center">
              <div>8</div>
            </div>
          </Slider>
        </div>
      </div> 
    );
}
 
export default SliderInside;