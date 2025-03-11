import { FC } from "react";

interface IAboutCard {
  title: string;
  description: string;
}

const AboutCard: FC<IAboutCard> = ({ title, description }) => {
  return (
    <div className="sm:p-10 p-5 shadow-mainShadow dark:shadow-none dark:bg-secondary/70 rounded-2xl">
      <h1 className="text-xl text-black/90 dark:text-white/90 font-black font-nunito mb-3">
        {title}
      </h1>
      <p className="text-black/70 dark:text-white/70">{description}</p>
    </div>
  );
};

export default AboutCard;
