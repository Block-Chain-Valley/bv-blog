import clsx from "clsx";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { UIProps } from "src/props";

export interface BannerProps extends UIProps.Div {
  banner: IGatsbyImageData;
}

export const Banner = ({ banner, className, ...props }: BannerProps) => {
  return (
    <div className={clsx("relative h-[400px] overflow-hidden", className)} {...props}>
      <GatsbyImage
        image={{ ...banner, layout: "constrained", width: 1800, height: 400 }}
        alt="Banner"
        className="h-full w-full object-cover"
      />
      <div className="absolute left-1/2 top-1/2 w-[1000px] -translate-x-1/2 translate-y-16 transform">
        <div className="bottom-5 flex flex-col gap-5">
          <p className="text-30/semi-bold text-theme-white">Web3 생태계를 만들어나가는 혁신가들의 공간</p>
          <p className="text-20/regular text-theme-white">블록체인 밸리는 고려대학교 유일의 블록체인 학회입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
