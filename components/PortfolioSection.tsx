import { ServicesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import PageHeader from "./PageHeader";

const PortfolioSection: FC = () => {
  return (
    <section>
      {/* Portfolio Page Header */}
      <PageHeader
        title="Our Portfolio"
        description="Showcasing our best work, creativity, and expertise."
      />

      {/* Portfolio Grid */}
      <div className="container grid lg:gap-10 gap-16 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-10">
        {ServicesData.map(({ id, name, portfolio, portfolioDesc }, index) => {
          if (!portfolio || portfolio.length === 0) return null;
          return (
            <div
              key={index}
              className="shadow-mainShadow dark:shadow-none dark:bg-secondary/70 rounded-2xl overflow-hidden"
            >
              <div className="cursor-pointer overflow-hidden">
                <Image
                  src={portfolio[0]?.imgSrc}
                  alt={`dev-sphere-${name}`}
                  className="hover:scale-110 transition-all duration-300"
                  priority
                />
              </div>
              <div className="px-5 pb-5 pt-2">
                <h1 className="font-nunito text-lg font-black mb-1">{name}</h1>
                <p className="text-black/70 mb-3 dark:text-white/70">
                  {portfolioDesc}
                </p>
                <Link href={`/services/${id}`}>
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
