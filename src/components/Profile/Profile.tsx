import { yearMapper } from "@/utils/mapper";
import { Team } from "@/utils/types";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export interface ProfileProps {
  profileImage: IGatsbyImageData;
  name: string;
  team: Team;
  year: number;
  createdAt: string;
}

export const Profile = ({ profileImage, name, team, year, createdAt }: ProfileProps) => {
  return (
    <div className="flex items-start gap-2.5">
      <GatsbyImage image={{ ...profileImage, width: 40, height: 40 }} alt="Profile" imgClassName="rounded-[20px]" />
      <div className="flex flex-col items-start justify-center gap-0.5">
        <div className="flex items-center justify-center gap-2 text-theme-black">
          <div className="text-16/semi-bold">{name}</div>
          <div className="text-13/regular">{`${team}, ${yearMapper(year)}`}</div>
        </div>
        <div className="text-13/regular text-theme-gray">{createdAt}</div>
      </div>
    </div>
  );
};

export default Profile;
