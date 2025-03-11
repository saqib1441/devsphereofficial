import { FC } from "react";
import TestimonialSwiper from "./TestimonialSwiper";

const Testimonial: FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <p className="text-primary">Testimonials</p>
          <h1 className="text-3xl font-nunito font-black mb-2 text-black/90 dark:text-white/90">
            What Others Say About Us
          </h1>
        </div>
        <div className="mt-10">
          <TestimonialSwiper />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
