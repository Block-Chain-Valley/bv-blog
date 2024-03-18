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
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { PostThumbnail } from "./PostThumbnail";

export interface PostBodyProps {
  title: string;
  articleType: string;
  createdAt: string;
  phoneThumbnail: IGatsbyImageData;
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
  phoneThumbnail,
  thumbnail,
  body,
  profileImage,
  name,
  team,
  year,
  profileText,
}: PostBodyProps) => {
  const { isMobile } = useMobileContext();
  const { setToastContext } = useToastContext();
  const location = useLocation();

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
    <div className={clsx("flex w-full flex-col items-start gap-[50px] px-8 py-10", "pc:w-[800px] pc:px-0")}>
      {/* Thumbnail */}
      <PostThumbnail phoneThumbnail={phoneThumbnail} thumbnail={thumbnail} />
      {/* Title */}
      <div className="flex w-full flex-col items-start gap-5">
        <div className="text-16/regular text-theme-black">{articleType}</div>
        <div className={clsx("text-20/semi-bold text-theme-black", "pc:text-24/semi-bold")}>{title}</div>
        <Profile profileImage={profileImage} name={name} team={team} year={year} createdAt={createdAt} />
      </div>
      {/* Content */}
      <Markdown body={body} />
      {/* Content Footer */}
      <div className={clsx("flex flex-col items-start gap-5 self-stretch py-5", "pc:gap-10")}>
        <div className={clsx("text-16/semi-bold text-theme-black", "pc:text-20/semi-bold")}>
          도움이 되는 아티클이었나요?
        </div>
        <div
          className={clsx(
            "flex flex-col items-start justify-between gap-5 self-stretch",
            "tablet:flex-row tablet:items-center",
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
