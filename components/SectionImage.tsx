import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface SectionImageProps {
  imgSrc: StaticImageData | string;
  imgAlt: string;
}

const SectionImage: FC<SectionImageProps> = ({ imgSrc, imgAlt }) => {
  return (
    <div className="lg:w-1/2 lg:flex lg:items-end">
      <Image
        src={imgSrc}
        alt={imgAlt}
        priority
        className="sm:w-[500px] mx-auto md:w-[550px] xl:w-[600px]"
      />
    </div>
  );
};

export default SectionImage;
