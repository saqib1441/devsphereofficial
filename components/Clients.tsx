"use client";

import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ClientData } from "@/lib/data";

const Clients: FC = () => {
  return (
    <section className="container">
      <div className="shadow-mainShadow py-20 rounded-2xl text-center bg-white dark:bg-secondary/70 dark:border dark:shadow-none">
        {/* Section title */}
        <h1 className="font-nunito text-3xl font-black text-black/90 dark:text-white/90">
          Join Our Happy Customers
        </h1>

        {/* Swiper carousel container */}
        <div className="mt-10 px-5">
          <Swiper
            modules={[Autoplay]} // Swiper modules (Autoplay here)
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }} // Autoplay settings
            loop={true} // Loop the carousel infinitely
            spaceBetween={0} // Space between slides
            slidesPerView={1} // Default slides per view
            breakpoints={{
              // Custom breakpoints for responsive design
              400: { slidesPerView: 2 },
              700: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            aria-label="Client Logos Carousel" // Accessibility improvement: label for screen readers
          >
            {ClientData.map((client, index) => {
              return (
                <SwiperSlide
                  key={`client-logo-${index}`} // Unique key for each slide
                  className="w-full cursor-pointer"
                  aria-label={`Logo of ${client}`} // Descriptive label for accessibility
                >
                  <Image
                    src={client} // Client logo
                    alt={`Client logo of ${client}`} // More accessible alt text with client name
                    priority // Prioritize loading the image
                    className="mx-auto w-[150px] dark:bg-white rounded-md h-auto select-none lg:w-[120px]" // Center image inside the swiper slide
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
