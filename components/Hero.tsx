"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { data } from "@/data/sliderImages";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-[85vh]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1366}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
