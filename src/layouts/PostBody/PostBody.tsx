import Profile from "@/components/Profile/Profile";
import ProfileLarge from "@/components/Profile/ProfileLarge";
import ShareButton from "@/components/ShareButton/ShareButton";
import { Team } from "@/utils/types";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface PostBodyProps {
  title: string;
  articleType: string;
  createdAt: string;
  thumbnail: IGatsbyImageData;
  body: string;
  name: string;
  team: Team;
  year: number;
  profileText: string;
  profileImage: IGatsbyImageData;
}

export const PostBody = ({
  title,
  articleType,
  createdAt,
  thumbnail,
  body,
  profileImage,
  name,
  team,
  year,
  profileText,
}: PostBodyProps) => {
  return (
    <div className="flex w-[800px] flex-col items-start gap-[50px] py-10">
      {/* Thumbnail */}
      <GatsbyImage image={{ ...thumbnail, layout: "fixed", width: 800, height: 400 }} alt="Thumbnail" />
      {/* Title */}
      <div className="flex w-full flex-col items-start gap-5">
        <div className="text-16/regular text-theme-black">{articleType}</div>
        <div className="text-24/semi-bold text-theme-black">{title}</div>
        <Profile profileImage={profileImage} name={name} team={team} year={year} createdAt={createdAt} />
      </div>
      {/* Content */}
      <ReactMarkdown className="prose max-w-none" remarkPlugins={[remarkGfm]}>
        {body}
      </ReactMarkdown>
      {/* Content Footer */}
      <div className="flex flex-col items-start gap-10 self-stretch py-5">
        <div className="text-20/semi-bold text-theme-black">도움이 되는 아티클이었나요?</div>
        <div className="flex items-center justify-between self-stretch">
          <ProfileLarge profileImage={profileImage} name={name} team={team} year={year} profileText={profileText} />
          <ShareButton description="이 아티클 공유하기" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default PostBody;
