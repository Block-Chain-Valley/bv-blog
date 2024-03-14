import { Team, yearMapper } from "@/utils";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export interface ProfileLargeProps {
  profileImage: IGatsbyImageData;
  name: string;
  team: Team;
  year: number;
  profileText: string;
}

export const ProfileLarge = ({ profileImage, name, team, year, profileText }: ProfileLargeProps) => {
  return (
    <div className="flex items-center gap-5">
      <GatsbyImage image={{ ...profileImage, width: 80, height: 80 }} alt="Profile" imgClassName="rounded-[40px]" />
      <div className="flex flex-col items-start justify-center gap-1 text-theme-black">
        <div className="flex items-center justify-center gap-2">
          <div className="text-20/semi-bold">{name}</div>
          <div className="text-16/regular">{`${team}, ${yearMapper(year)}`}</div>
        </div>
        <div className="text-13/regular">{profileText}</div>
      </div>
    </div>
  );
};

export default ProfileLarge;
