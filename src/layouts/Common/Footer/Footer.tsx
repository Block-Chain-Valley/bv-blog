import { useMobileContext } from "@/context/MobileContext";
import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Footer = () => {
  return (
    <div className={clsx("flex w-full flex-col items-start gap-[60px] px-8 pb-[60px] pt-0", "pc:px-[120px]")}>
      {/* Divider */}
      <div className="h-[1px] self-stretch bg-theme-lightGray"></div>
      {/* Footer Content */}
      <div
        className={clsx(
          "flex flex-col items-start gap-5 self-stretch",
          "pc:flex-row pc:items-center pc:justify-between",
        )}
      >
        {/* Info */}
        <div className="flex flex-col items-start gap-5 text-theme-black">
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-13/semi-bold">블록체인 밸리</p>
            <p className="text-13/regular">블록체인 밸리는 2022년 설립된 고려대학교 유일의 블록체인 학회입니다.</p>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-13/semi-bold">SNS 링크</p>
            <div className="flex items-start gap-3">
              <a href="https://www.instagram.com/blockchain__valley/">
                <StaticImage
                  src="../../../assets/icons/Instagram.png"
                  alt="Instagram"
                  placeholder="none"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://twitter.com/blockchainkor">
                <StaticImage
                  src="../../../assets/icons/Twitter.png"
                  alt="Twitter"
                  placeholder="none"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://blog.blockchainvalley.ac/">
                <StaticImage
                  src="../../../assets/icons/Medium.png"
                  alt="Medium"
                  placeholder="none"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://linktr.ee/BVkor">
                <StaticImage
                  src="../../../assets/icons/Linktree.png"
                  alt="Linktree"
                  placeholder="none"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div
          className={clsx(
            "flex flex-col items-start justify-center gap-2.5 text-13/regular text-theme-gray",
            "pc:items-end",
          )}
        >
          <p>Copyright © 블록체인 밸리 All Right Reserved.</p>
          <p>이메일 | contact@blockchainvalley.ac</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
