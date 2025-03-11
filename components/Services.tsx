import { FC } from "react";
import ServiceCard from "./ServiceCard";
import { ServicesData } from "@/lib/data";
import PageHeader from "./PageHeader";

const Services: FC = () => {
  return (
    <section>
      <div className="container">
        <PageHeader
          title="FEATURED SERVICES"
          description="You bring the business, and we bring the brilliant minds"
        />
        <div className="grid gap-16 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {ServicesData.map((service) => {
            return (
              <ServiceCard
                key={service.id} // using unique id as key
                title={service.name}
                description={service.shortDesc}
                icon={service.icon}
                link={`/services/${service.id}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
