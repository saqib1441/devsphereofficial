import { FC } from "react";

// Components
import About from "@/components/About";
import Clients from "@/components/Clients";
import CustomeService from "@/components/CustomeService";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import HeroImg from "@/assets/hero.png";

const HeadingComponent: FC = () => {
  return (
    <>
      Launch Faster with <span className="text-primary">Dev</span>Sphere as Your
      Co-Pilot
    </>
  );
};

const HomePage: FC = () => {
  return (
    <main className="lg:pt-20 py-28 space-y-28">
      {/* Header Section */}
      <Header
        heading={<HeadingComponent />}
        description="Transform your business with expert web/app development, UI/UX design & branding. Secure, scalable IT services driving innovation that lasts."
        link="/services"
        imgSrc={HeroImg}
        imgAlt="dev-sphere-hero-img"
      />

      {/* Clients Section */}
      <Clients />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Why Us Section */}
      <WhyUs />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Custom Service Section */}
      <CustomeService />
    </main>
  );
};

export default HomePage;
