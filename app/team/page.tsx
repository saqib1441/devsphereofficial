import { FC } from "react";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import CustomService from "@/components/CustomeService";
import Team from "@/components/Team";

const TeamPage: FC = () => {
  return (
    <main className="py-28 space-y-28">
      {/* Team Section */}
      <Team />

      {/* Services Section */}
      <Services />

      {/* Client Section */}
      <Clients />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Custom Service */}
      <CustomService />
    </main>
  );
};

export default TeamPage;
