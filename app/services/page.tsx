import { FC } from "react";

// Components
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import CustomService from "@/components/CustomeService";

const ServicesPage: FC = () => {
  return (
    <main className="py-28 space-y-28">
      {/* Services Section */}
      <Services />

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

export default ServicesPage;
