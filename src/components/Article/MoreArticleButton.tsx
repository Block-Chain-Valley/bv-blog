import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export interface MoreArticleButtonProps {
  description: string;
  handleClick: () => void;
}

export const MoreArticleButton = ({ description, handleClick }: MoreArticleButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-1 text-16/regular text-theme-black" onClick={handleClick}>
      <p>{description}</p>
      <StaticImage src="../../assets/icons/RightArrow.svg" alt="RightArrow" placeholder="none" width={19} height={19} />
    </button>
  );
};

export default MoreArticleButton;
