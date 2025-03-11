import { PricingPlan } from "@/lib/data";
import Link from "next/link";
import React, { FC } from "react";
import { FaCheck, FaRupeeSign } from "react-icons/fa6";
import { Button } from "./ui/button";

const PricingCard: FC<PricingPlan> = ({
  title,
  description,
  features,
  price,
}) => {
  return (
    <div className="flex flex-col items-center shadow-mainShadow rounded-2xl xl:p-10 p-5 dark:shadow-none dark:bg-secondary/70 w-[300px] mx-auto sm:w-auto sm:mx-0">
      <h1 className="text-2xl font-nunito font-black">{title}</h1>
      <p className="text-black/70 mb-3 dark:text-white/70">{description}</p>
      <h1 className="text-primary font-nunito font-black text-4xl flex mb-3">
        <span className="text-lg">
          <FaRupeeSign />
        </span>
        {price}
      </h1>
      <div className="space-y-3 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="text-primary text-sm">
              <FaCheck />
            </div>
            <p className="text-black/70 dark:text-white/70">{feature}</p>
          </div>
        ))}
      </div>
      <Link href="/contact" className="mt-5">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default PricingCard;
