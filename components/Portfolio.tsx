import { FC } from "react";
import PortfolioImg from "@/assets/portfolio.png";
import Link from "next/link";
import { Button } from "./ui/button";
import Counter from "./Counter";
import SectionImage from "./SectionImage";

interface CounterDataInterface {
  end: number;
  suffex: string;
  description: string;
}

const Portfolio: FC = () => {
  const counterData: CounterDataInterface[] = [
    {
      end: 100,
      suffex: "+",
      description: "Projects Done",
    },
    {
      end: 90,
      suffex: "+",
      description: "Happy Clients",
    },
  ];
  return (
    <section>
      <div className="container flex flex-col gap-16 lg:flex-row">
        {/* Image Section */}
        <SectionImage
          imgSrc={PortfolioImg}
          imgAlt="dev-sphere-portfolio-image"
        />

        {/* Content Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-center">
          {/* Title Section */}
          <h1 className="text-center lg:text-start text-3xl font-nunito font-black mb-5 text-black/90 dark:text-white/90">
            <span className="before:absolute before:w-full before:h-1 before:left-0 before:-bottom-2 inline-block before:bg-primary before:rounded-full relative">
              Our
            </span>{" "}
            Portfolio
          </h1>

          {/* Description Section */}
          <p className="text-center lg:text-start text-black/70 dark:text-white/70 mb-4 sm:w-[500px] sm:mx-auto lg:w-auto xl:w-[500px] lg:mx-0 leading-relaxed">
            Explore our portfolio to see how we transform ideas into reality
            with expert web development, UI/UX design, digital marketing, and
            creative solutions. From sleek websites to engaging visuals, our
            work reflects innovation, precision, and a results-driven approach.
            Let our projects speak for themselves!
          </p>

          {/* Counter Section */}
          <div className="grid grid-cols-2 gap-5 mb-7 mt-2">
            {counterData.map((count, index) => (
              <Counter
                start={0}
                end={count.end}
                suffix={count.suffex}
                key={index}
                description={count.description}
              />
            ))}
          </div>

          {/* Portfolio Button Section */}
          <Link href="/portfolio">
            <Button aria-label="View our complete portfolio">
              Show Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
