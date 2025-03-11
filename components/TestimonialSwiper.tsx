"use client";

import { FC } from "react";
import { FaQuoteLeft, FaUser } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { TestimonialData } from "@/lib/data";

const TestimonialSwiper: FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={true}
      loop={true}
      spaceBetween={50}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
      style={{ padding: "2%" }}
    >
      {TestimonialData.map((testimonial, index) => (
        <SwiperSlide key={index} className="pb-10">
          <div className="p-7 flex flex-col items-center shadow-xl rounded-2xl cursor-pointer dark:shadow-none dark:bg-secondary/70 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-2 text-3xl text-primary">
              <FaQuoteLeft />
            </div>
            <p className="text-black/70 dark:text-white/70 text-center">
              {testimonial.text}
            </p>
            <div className="flex items-center mt-3 flex-col">
              <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden text-3xl border border-primary mb-1">
                <FaUser />
              </div>
              <h1 className="text-lg font-nunito font-black dark:text-white/90 text-black/90">
                {testimonial.name}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSwiper;
