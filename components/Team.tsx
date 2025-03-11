import { TeamData } from "@/lib/data";
import { FC } from "react";
import TeamCard from "./TeamCard";
import PageHeader from "./PageHeader";

const Team: FC = () => {
  return (
    <section>
      {/* Page Header */}
      <PageHeader
        title="Our Team"
        description="Meet the team that makes our dreams come true."
      />

      {/* Teams Contetn */}
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:gap-10 gap-16 lg:grid-cols-3">
          {TeamData.map((team, index) => {
            return (
              <TeamCard
                imgSrc={team.imgSrc}
                name={team.name}
                position={team.position}
                socialLinks={team.socialLinks}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
