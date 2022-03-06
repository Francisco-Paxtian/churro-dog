import React from "react";
import "../views/css/two.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carouselx = () => {
  return (
    <div className="w-[90%] sm:w-[80%] sm:pb-8 margin-0-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={4000}
        dynamicHeight={false}
      >
        <div>
          <img
            className="h-[24rem] object-cover"
            src="https://images.pexels.com/photos/3114143/pexels-photo-3114143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5  md:mt-20 lg:mt-0 md:p-1">
              <h1 className="font-extrabold p-4 text-center rounded-sm  text-white text-xl w-full md:text-2xl lg:text-3xl  lgw-[70%]">
                Alimento elaborado de forma artesanal
              </h1>
            </div>
          </div>
        </div>

        <div class="" >
          <img
            className="h-[24rem] object-cover"
            src="https://images.pexels.com/photos/1289905/pexels-photo-1289905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5 md:mt-20 lg:mt-0 md:p-1">
              <h1 className=" font-black p-4 text-center rounded-sm  text-white text-xl w-full md:text-2xl lg:text-3xl">
                Nuestra formula ayuda a la digestión de tu mascota
              </h1>
            </div>
          </div>
        </div>

        <div>
          <img
            className="h-[24rem] object-cover"
            src="https://images.pexels.com/photos/10361808/pexels-photo-10361808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5  md:mt-20 lg:mt-0 md:p-1">
              <h1 className="font-black p-4 text-center rounded-sm  text-white text-xl w-full md:text-2xl lg:text-3xl  lgw-[70%]">
                Utilizamos maíz cultivado por nosotros mismos por manos veracruzanas
              </h1>
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  );
};
export default Carouselx;