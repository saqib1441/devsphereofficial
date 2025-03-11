import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

const CustomService: FC = () => {
  return (
    <section>
      <div className="container flex flex-col gap-2 items-center text-center">
        {/* Section Title */}
        <h1
          id="custom-service-section"
          className="text-black/90 dark:text-white/90 text-3xl font-nunito font-black"
        >
          Need custom services?
        </h1>

        {/* Description Text */}
        <p className="text-black/70 dark:text-white/70 sm:w-[550px] md:w-[600px] lg:w-[700px] mb-2">
          Looking for custom services tailored to your needs? We offer
          personalized solutions designed to meet your unique requirements and
          deliver exceptional results.
        </p>

        {/* Contact Button */}
        <Link href="/contact">
          <Button>Contact Us</Button>
        </Link>
      </div>
    </section>
  );
};

export default CustomService;
