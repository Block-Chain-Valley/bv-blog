import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Banner = () => {
  return (
    <div className="flex h-[300px] w-full items-center justify-center">
      <StaticImage src="../../../assets/images/BannerDefault.png" alt="Banner" width={1280} height={300} />
    </div>
  );
};

export default Banner;
