import { FC } from "react"; // External library

// Internal components
import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import Clients from "@/components/Clients";
import PageHeader from "@/components/PageHeader";
import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";

// Data
import { AboutPageData } from "@/lib/data";
import WhyUs from "@/components/WhyUs";
import CustomService from "@/components/CustomeService";

const AboutPage: FC = () => {
  return (
    <main className="py-28 space-y-28">
      {/* Page Header */}
      <PageHeader
        title="About Us"
        description="Providing brilliant ideas for your business."
      />

      {/* About Section */}
      <About />

      {/* Vision and Mission Cards */}
      <section className="container py-10 flex flex-col gap-16 lg:flex-row">
        <AboutCard
          title={AboutPageData.ourVision.title}
          description={AboutPageData.ourVision.description}
        />
        <AboutCard
          title={AboutPageData.ourMission.title}
          description={AboutPageData.ourMission.description}
        />
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us */}
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

export default AboutPage;
