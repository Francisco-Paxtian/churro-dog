import React from "react";
import "../views/css/two.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carouselx = () => {
  return (
    <div className="">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}   
        dynamicHeight={false}     
      >
        <div>
          <img
            className="h-[34rem] object-cover"
            src="https://images.pexels.com/photos/3114143/pexels-photo-3114143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5 py-36 md:mt-20 lg:mt-0 md:p-10">
              <h1 className="bg-grisesito p-10 text-center rounded-sm text-azulito text-sm font-medium w-full md:text-2xl lg:text-3xl  lgw-[70%]">
                Te interesaria saber mas sobre temas interesantes?
              </h1>              
            </div>
          </div>
        </div>

        <div>
          <img
            className="h-[34rem] object-cover"
            src="https://images.pexels.com/photos/1289905/pexels-photo-1289905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5 py-36 md:mt-20 lg:mt-0 md:p-10">
              <h1 className="bg-grisesito p-10 text-center rounded-sm text-azulito text-sm font-semibold w-full md:text-2xl lg:text-3xl  lgw-[70%]">
                Te interesaria saber mas sobre temas interesantes?
              </h1>              
            </div>
          </div>
        </div>

        <div>
          <img
            className="h-[34rem] object-cover"
            src="https://images.pexels.com/photos/10361808/pexels-photo-10361808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5 py-36 md:mt-20 lg:mt-0 md:p-10">
              <h1 className="bg-grisesito p-10 text-center rounded-sm text-azulito text-sm font-semibold w-full md:text-2xl lg:text-3xl  lgw-[70%]">
                Te interesaria saber mas sobre temas interesantes?
              </h1>              
            </div>
          </div>
        </div>
       
      </Carousel>
    </div>
  );
};
export default Carouselx;