'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import img1 from "../../../public/image/car interior/int1.jpg"
import img2 from "../../../public/image/car interior/int2.jpg"
import img3 from "../../../public/image/car interior/int3.jpg"
import img4 from "../../../public/image/car interior/int4.jpg"
import img5 from "../../../public/image/car interior/int5.jpg"
import img6 from "../../../public/image/car interior/int6.jpg"
import img7 from "../../../public/image/car interior/int7.jpg"
import img8 from "../../../public/image/car interior/int8.jpg"
import img9 from "../../../public/image/car interior/int9.jpg"
import img10 from "../../../public/image/car interior/int10.jpg"
import img11 from "../../../public/image/car interior/int11.jpg"
import img12 from "../../../public/image/car interior/int12.jpg"
import img13 from "../../../public/image/car interior/int13.jpg"
import img14 from "../../../public/image/car interior/int14.jpg"
import img15 from "../../../public/image/car interior/int15.jpg"

const SliderInside = () => {

  const renderImages = () => {
    const images = [
      "",
      "",
      ""
    ]

  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    arrows:false,
  };


  return (
    <div className="slider-container  ">
        <div  className="  w-[300px] sm:w-[400px] lg:w-[500px] ">
          <Slider {...settings} >
            <div className="">
              <Image src={img2} alt=""/>
            </div>
            <div>
              <Image src={img3} alt=""/>
            </div>
            <div>
              <Image src={img4} alt=""/>
            </div>
          </Slider>
        </div>
      </div> 
    );
}
 
export default SliderInside;