"use client";
import { FC } from "react";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import CustomService from "@/components/CustomeService";
import PortfolioSection from "@/components/PortfolioSection";

const PortfolioPage: FC = () => {
  return (
    <main className="py-28 space-y-28">
      {/* Portfolio Grid Section */}
      <PortfolioSection />

      {/* Why Us Section */}
      <WhyUs />

      {/* Clients Section */}
      <Clients />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Custom Services Section */}
      <CustomService />
    </main>
  );
};

export default PortfolioPage;
