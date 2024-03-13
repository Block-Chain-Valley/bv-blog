import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const MoreArticleButton = () => {
  return (
    <button className="flex items-center justify-center gap-1 text-16/regular text-theme-black">
      <p>더 많은 아티클 보기</p>
      <StaticImage src="../../assets/icons/RightArrow.svg" alt="RightArrow" placeholder="none" width={19} height={19} />
    </button>
  );
};

export default MoreArticleButton;
