// SwiperSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Your Vision, Our Creation",
      description: "Creative planning meets flawless execution.",
      image: "https://i.ibb.co.com/b5vBYCyZ/antenna-oh-NCIi-KVT1g-unsplash.jpg",
    },
    {
      id: 2,
      title: "Turning Moments into Memories",
      description: "Crafting unforgettable events with elegance and care.",
      image:
        "https://i.ibb.co.com/v6FdD24K/priscilla-du-preez-Q7w-Gvnbuwj0-unsplash.jpg",
    },
    {
      id: 3,
      title: "Where Every Event Tells a Story",
      description: "Bringing your dream event to life, one detail at a time.",
      image:
        "https://i.ibb.co.com/wFzLFsLK/evangeline-shaw-nw-LTVwb7-Db-U-unsplash.jpg",
    },
    {
      id: 4,
      title: "From Planning to Perfection",
      description: "We handle the magic, you enjoy the moment.",
      image:
        "https://i.ibb.co.com/Ld8BB4dn/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg",
    },
    {
      id: 5,
      title: "Design. Organize. Celebrate.",
      description: "Expertly curated events tailored for you.",
      image:
        "https://i.ibb.co.com/39K1csvb/pablo-heimplatz-ZODc-Bk-Eohk8-unsplash.jpg",
    },
  ];
  return (
    <div className="w-full  mx-auto pb-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className=" h-64 md:h-96   ">
              <div className="relative inset-0  bg-opacity-40 flex flex-col items-center justify-center rounded-2xl object-cover">
                <img src={slide.image} alt={slide.title} className="w-full " />
                <div className="absolute top-36">
                  <h2 className="font text-2xl md:text-4xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="font text-lg  font-mono mt-2">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
