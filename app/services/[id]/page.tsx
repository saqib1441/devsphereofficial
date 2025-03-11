"use client";

import { FC, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PricingPlan, ServicesData, Service } from "@/lib/data";
import PricingCard from "@/components/PricingCard";
import PortfolioSwiper from "@/components/PortfolioSwiper";
import Link from "next/link";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import Clients from "@/components/Clients";
import CustomService from "@/components/CustomeService";

interface OtherServicesInterface {
  id: number;
  name: string;
}

const SingleService: FC = () => {
  const [service, setService] = useState<Service | null>(null);
  const [otherServices, setOtherServices] = useState<OtherServicesInterface[]>(
    []
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    const selectedService = ServicesData.find((s) => s.id.toString() === id);
    const filteredServices = ServicesData.filter((s) => s.id.toString() !== id);

    setService(selectedService || null);
    setOtherServices(filteredServices.map(({ id, name }) => ({ id, name })));
  }, [id]);

  if (!service) return null;

  return (
    <main className="lg:pt-20 py-28 space-y-28">
      {/* Page Header */}
      <Header
        heading={`Explore our ${service.name} service`}
        description={service.shortDesc}
        link="/contact"
        imgSrc={service.thumbnail}
        imgAlt={`dev-sphere-${service.name.toLowerCase()}`}
      />

      {/* Clients */}
      <Clients />

      {/* Description Section */}
      <section className="container space-y-28">
        <div className="flex gap-10 items-start flex-col lg:flex-row">
          <div className="lg:w-[70%]">
            <h1 className="text-xl font-nunito font-black">Description</h1>
            <p className="text-black/70 dark:text-white/70">
              {service.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 shadow-mainShadow p-7 rounded-2xl w-full lg:w-[30%] dark:shadow-none dark:bg-secondary/70">
            <h1 className="text-xl font-nunito font-black">More Services</h1>
            <div className="w-full flex flex-col gap-2">
              {otherServices.map(({ id, name }) => (
                <Link
                  key={id}
                  href={`/services/${id}`}
                  className="text-gray-600 dark:text-gray-400 border-b last:border-none pb-1 hover:text-primary transition-all duration-300 dark:border-white/10 dark:hover:text-primary"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        {service.pricing?.length ? (
          <div>
            <div className="text-center">
              <h1 className="font-black font-nunito text-3xl">Pricing Plans</h1>
              <p className="text-black/70 dark:text-white/70">
                Choose a plan that fits your needs and budget.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 my-10 items-start">
              {service.pricing.map((pricing: PricingPlan, index: number) => (
                <PricingCard
                  key={index}
                  title={pricing.title}
                  description={pricing.description}
                  features={pricing.features}
                  price={pricing.price}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* Portfolio Section */}
        {service.portfolio?.length ? (
          <div className="my-20" id="portfolio">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-nunito font-black">
                {service.name} Portfolio
              </h1>
              <p className="text-black/70 dark:text-white/70 sm:w-[500px] sm:mx-auto">
                Browse my portfolio to explore a collection of projects that
                showcase my creativity and expertise.
              </p>
            </div>
            <PortfolioSwiper
              portfolio={service.name}
              portfolioDesc={service.portfolioDesc}
              images={
                service.portfolio?.map((p) => ({
                  imgSrc: p.imgSrc,
                  link: p.link,
                })) ?? []
              }
            />
          </div>
        ) : null}
      </section>

      <Testimonial />
      <CustomService />
    </main>
  );
};

export default SingleService;
