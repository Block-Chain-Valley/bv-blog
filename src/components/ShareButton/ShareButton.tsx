import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export interface ShareButtonProps {
  description: string;
  handleClick: () => void;
}

export const ShareButton = ({ description, handleClick }: ShareButtonProps) => {
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
