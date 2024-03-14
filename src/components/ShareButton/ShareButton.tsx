import { useToastContext } from "@/context/ToastContext";
import { useLocation } from "@reach/router";
import copy from "copy-to-clipboard";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Toast from "../Popup/Toast";

export interface ShareButtonProps {
  description: string;
}

export const ShareButton = ({ description }: ShareButtonProps) => {
  const { setToastContext } = useToastContext();
  const location = useLocation();
  const fullUrl = `${location.origin}${location.pathname}${location.search}${location.hash}`;

  const handleClick = () => {
    copy(fullUrl);
    setToastContext(<Toast message="이 아티클 페이지의 주소를 클립보드에 복사했어요." isPositive={true} />);
  };

  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-lg bg-theme-primary px-3 py-2"
      onClick={handleClick}
    >
      <StaticImage src="../../assets/icons/CopyLink.png" alt="copy" width={15} height={15} />
      <p className="text-13/regular text-theme-white">{description}</p>
    </button>
  );
};

export default ShareButton;
