import Link from "next/link";
import { Button } from "./ui/button";
import { WhyUsData } from "@/lib/data";

const WhyUs = () => {
  return (
    <section>
      <div className="container flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center text-center gap-3 lg:w-[50%] lg:items-start lg:text-start">
          <p className="text-sm text-primary">Why choose us</p>
          <h1 className="font-nunito font-black text-3xl sm:w-[500px] lg:w-auto lg:text-4xl text-black/90 dark:text-white/90">
            We are here to provide you with consistent satisfaction
          </h1>
          <p className="text-black/70 dark:text-white/70 sm:w-[500px] lg:w-auto">
            Discover why we are your best choice! With a commitment to
            excellence, we ensure top-notch service, reliability, and customer
            satisfaction every time. Your success is our priority!
          </p>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>

        <div className="grid gap-10 lg:gap-5 lg:w-[50%] md:w-[600px] md:mx-auto lg:mx-0 mt-10 lg:mt-0">
          {WhyUsData.map((data, index) => (
            <div
              key={index}
              className="flex gap-3 p-5 shadow-mainShadow dark:shadow-none dark:bg-secondary/70 rounded-2xl flex-col sm:flex-row sm:items-center"
            >
              <div className="text-primary w-20 bg-primary/5 dark:bg-background h-16 rounded-2xl flex items-center justify-center text-3xl sm:w-28 sm:h-full">
                {data.icon}
              </div>
              <div className="w-full">
                <h1 className="text-lg font-nunito font-black text-black/90 dark:text-white/90">
                  {data.title}
                </h1>
                <p className="text-black/70 dark:text-white/70 md:w-[450px] lg:w-auto">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
