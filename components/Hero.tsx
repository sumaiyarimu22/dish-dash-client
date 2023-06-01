"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "@/data/sliderImages";
import Image from "next/image";
import Link from "next/link";
import Overly from "./Overly";

const Hero = () => {
  return (
    <section className="w-full h-[80vh]">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        parallax={true}
        grabCursor={true}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1366}
                priority
                className="w-full h-full object-cover"
              />
              <Overly />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-[2] space-y-5">
                <h1
                  data-swiper-parallax="-300%"
                  className="text-7xl lg:text-8xl font-semibold"
                >
                  {item.headline}
                </h1>
                <p data-swiper-parallax="-500%" className="text-lg">
                  {item.paragraph}
                </p>
                <div data-swiper-parallax="-600%">
                  <Link
                    href="/products"
                    className="btn btn-secondary btn-active text-white darkButton duration-300"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
