import { FC } from "react";
import AboutImg from "@/assets/about.png";
import Link from "next/link";
import { Button } from "./ui/button";
import { AboutData } from "@/lib/data";
import SectionImage from "./SectionImage";

const About: FC = () => {
  return (
    <section>
      <div className="container flex flex-col gap-16 lg:flex-row">
        {/* Image Section */}
        <SectionImage imgSrc={AboutImg} imgAlt="dev-sphere-about-image" />

        {/* Text and Button Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-center">
          <h1 className="text-center lg:text-start text-3xl font-nunito font-black mb-5 text-black/90 dark:text-white/90 relative">
            <span className="absolute w-full h-1 left-0 -bottom-2 bg-gradient-to-r from-primary to-yellow-500 rounded-full"></span>
            About Us
          </h1>
          <p className="text-center lg:text-start text-black/70 mb-4 sm:w-[500px] sm:mx-auto lg:w-auto xl:w-[500px] lg:mx-0 dark:text-white/70">
            At Dev Sphere, we provide top-notch IT services, including web
            development, app development, digital marketing, SEO, WordPress,
            UI/UX design, and graphic design. Our expert team is dedicated to
            delivering innovative and customized solutions that help businesses
            thrive in the digital world. Partner with us for cutting-edge
            technology and exceptional results!
          </p>

          {/* Service List */}
          <div className="mb-5 grid gap-2">
            {AboutData.map((about, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="text-primary">{about.icon}</div>
                <h1 className="text-lg font-nunito text-black/70 dark:text-white/70">
                  {about.title}
                </h1>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <Link href="/contact" aria-label="Contact Us">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
