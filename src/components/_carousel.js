import React from "react";
import "../views/css/two.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carouselx = () => {
  return (
    <div className="w-full h-auto bg-black">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            className="h-auto"
            src="https://images.pexels.com/photos/3114143/pexels-photo-3114143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5 py-36 md:mt-20 lg:mt-0 md:p-10">
              <h1 className="text-sm w-full md:text-4xl lg:text-5xl  lgw-[70%]">
                Te interesaria saber mas sobre temas interesantes?
              </h1>
              <button className="bg-rojito hover:bg-rojitoSubidito text-white font-semibold  md:w-[20%] md:h-[5vh] text-center rounded-full mt-5 md:mt-10  md:text-md p-1">
                <a href="https://open.spotify.com/">Ver articulo</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-auto"
            src="https://images.pexels.com/photos/1289905/pexels-photo-1289905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5 py-36 md:mt-20 lg:mt-0 md:p-10">
              <h1 className="text-sm w-full md:text-4xl lg:text-5xl lgw-[70%]">
                Te interesaria saber mas sobre temas interesantes?
              </h1>
              <button className="bg-rojito hover:bg-rojitoSubidito text-white font-semibold  md:w-[20%] md:h-[5vh] text-center rounded-full mt-5 md:mt-10  md:text-md p-1">
                <a href="https://open.spotify.com/">Ver articulo</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-auto"
            src="https://images.pexels.com/photos/10361808/pexels-photo-10361808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div className="legend">
            <div className="p-5 py-36 md:mt-20 lg:mt-0 md:p-10">
              <h1 className="text-sm w-full md:text-4xl lg:text-5xl  lgw-[70%]">
                Te interesaria saber mas sobre temas interesantes?
              </h1>
              <button className="bg-rojito hover:bg-rojitoSubidito text-white font-semibold  md:w-[20%] md:h-[5vh] text-center rounded-full mt-5 md:mt-10  md:text-md p-1">
                <a href="https://open.spotify.com/">Ver articulo</a>
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Carouselx;