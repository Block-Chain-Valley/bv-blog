import Button from "@/components/Button/Button";
import Markdown from "@/components/Markdown/Markdown";
import Toast from "@/components/Popup/Toast";
import Profile from "@/components/Profile/Profile";
import ProfileLarge from "@/components/Profile/ProfileLarge";
import { useMobileContext } from "@/context/MobileContext";
import { useToastContext } from "@/context/ToastContext";
import { Team } from "@/utils";
import { useLocation } from "@reach/router";
import clsx from "clsx";
import copy from "copy-to-clipboard";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

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
  const { isMobile, isTablet } = useMobileContext();
  const { setToastContext } = useToastContext();
  const location = useLocation();

  const thumbnailOptions: Partial<IGatsbyImageData> = isMobile
    ? { layout: "constrained" }
    : { layout: "fixed", width: 800, height: 400 };

  const fullUrl = `${location.origin}${location.pathname}${location.search}${location.hash}`;

  const handleCopyClick = () => {
    copy(fullUrl);
    setToastContext(
      <Toast
        message={isMobile ? "아티클 링크를 복사했어요." : "이 아티클의 링크를 클립보드에 복사했어요."}
        isPositive={true}
      />,
    );
  };

  return (
    <div className={clsx("flex flex-col items-start gap-[50px] py-10", isMobile ? "w-full px-8" : "w-[800px]")}>
      {/* Thumbnail */}
      <GatsbyImage image={{ ...thumbnail, ...thumbnailOptions }} alt="Thumbnail" />
      {/* Title */}
      <div className="flex w-full flex-col items-start gap-5">
        <div className="text-16/regular text-theme-black">{articleType}</div>
        <div className={clsx("text-theme-black", isMobile ? "text-20/semi-bold" : "text-24/semi-bold")}>{title}</div>
        <Profile profileImage={profileImage} name={name} team={team} year={year} createdAt={createdAt} />
      </div>
      {/* Content */}
      <Markdown body={body} />
      {/* Content Footer */}
      <div className={clsx("flex flex-col items-start self-stretch py-5", isMobile ? "gap-5" : "gap-10")}>
        <div className={clsx("text-theme-black", isMobile ? "text-16/semi-bold" : "text-20/semi-bold")}>
          도움이 되는 아티클이었나요?
        </div>
        <div
          className={clsx(
            "flex justify-between self-stretch",
            isMobile && !isTablet ? "flex-col items-start gap-5" : "items-center",
          )}
        >
          <ProfileLarge profileImage={profileImage} name={name} team={team} year={year} profileText={profileText} />
          <Button description="이 아티클 공유하기" handleClick={handleCopyClick} />
        </div>
      </div>
    </div>
  );
};

export default PostBody;
