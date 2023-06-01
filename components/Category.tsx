"use client";
import CategorySliderItem from "./CategorySliderItem";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "@/data/categoryImages";

const Category = () => {
  return (
    <section className="py-20">
      <SectionTitle subtitle="Categories" title="Browse our all categories" />
      {/* SECTION GOES HERE */}
      <div className="w-full h-[50vh]">
        {/*SLIDER GOSE HERE*/}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={750}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem
                image={item.src}
                alt={item.alt}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
