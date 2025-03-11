import { FC } from "react";

interface IPageHeader {
  title: string;
  description: string;
}

const PageHeader: FC<IPageHeader> = ({ title, description }) => {
  return (
    <header className="text-center container">
      <div className="flex flex-col gap-1 items-center text-center mb-16">
        <p className="text-sm text-primary">{title}</p>
        <h1 className="font-nunito text-3xl font-black sm:w-[500px]">
          {description}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
