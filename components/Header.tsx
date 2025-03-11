import { FC, ReactElement } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { StaticImageData } from "next/image";
import SectionImage from "./SectionImage";

interface HeaderInterface {
  heading: string | ReactElement;
  description: string;
  link: string;
  imgSrc: StaticImageData | string;
  imgAlt: string;
}

const Header: FC<HeaderInterface> = ({
  heading,
  description,
  link,
  imgSrc,
  imgAlt,
}) => {
  return (
    <header className="container flex flex-col lg:flex-row lg:items-center gap-16">
      {/* Left side content */}
      <div className="flex flex-col items-center text-center lg:w-1/2 lg:text-start lg:items-start lg:justify-center">
        <p className="bg-gradient-to-r from-primary to-yellow-500 w-fit py-1 px-5 text-sm rounded-full text-white mb-4">
          Premium Services
        </p>
        <h1
          id="header-section"
          className="font-nunito text-3xl font-black text-black/80 mb-4 sm:text-4xl xl:text-5xl dark:text-white/90 sm:w-[500px] sm:leading-11 xl:leading-14"
        >
          {heading}
        </h1>
        <p className="text-black/70 mb-6 sm:w-[500px] sm:mx-auto lg:w-auto xl:w-[500px] lg:mx-0 dark:text-white/70">
          {description}
        </p>
        <Link href={link}>
          <Button>Learn More</Button>
        </Link>
      </div>

      {/* Right side image */}
      <SectionImage imgAlt={imgAlt} imgSrc={imgSrc} />
    </header>
  );
};

export default Header;
