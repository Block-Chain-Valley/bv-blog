import clsx from "clsx";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Tab = ({ tabName, isActivated }: { tabName: string; isActivated: boolean }) => {
  return (
    <button className={clsx("text-16/regular", isActivated ? "text-theme-black" : "text-theme-gray")}>{tabName}</button>
  );
};

export const Header = () => {
  return (
    <div className="px- flex w-full items-center justify-between px-[60px] py-8">
      <button type="button" className="flex flex-row items-center justify-center gap-2.5" onClick={() => navigate("/")}>
        <StaticImage src="../../../assets/images/Logo.png" alt="BV Logo" width={160} height={45} />
        <div className="text-16/semi-bold text-theme-black">기술 블로그</div>
      </button>
      <div className="flex items-center justify-center gap-[50px]">
        <Tab tabName="Tech" isActivated={true} />
        <Tab tabName="Research" isActivated={false} />
        <Tab tabName="블록체인 밸리" isActivated={false} />
      </div>
    </div>
  );
};

export default Header;
