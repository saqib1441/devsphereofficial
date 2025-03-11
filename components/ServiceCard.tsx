import Link from "next/link";
import { FC, ReactElement } from "react";
import { Button } from "./ui/button";

interface IServiceCard {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: FC<IServiceCard> = ({ icon, title, description, link }) => {
  return (
    <div className="shadow-mainShadow dark:shadow-none rounded-2xl p-6 dark:bg-secondary/70">
      <div className="size-16 flex items-center justify-center rounded-full bg-primary/5 dark:bg-background/70 text-3xl text-primary hover:bg-primary/10 dark:hover:bg-background cursor-pointer transition-all duration-300">
        {icon}
      </div>
      <h1 className="text-lg font-black font-nunito text-black/90 dark:text-white/90 my-2">
        {title}
      </h1>
      <p className="text-black/70 dark:text-white/70 mb-3">{description}</p>
      <Link href={link}>
        <Button>Read More</Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
