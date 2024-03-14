import Toast from "@/components/Popup/Toast";
import { useToastContext } from "@/context/ToastContext";
import clsx from "clsx";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export interface TabProps {
  tabName: string;
  isActivated: boolean;
  handleClick?: () => void;
}

export const Tab = ({ tabName, isActivated, handleClick }: TabProps) => {
  const { setToastContext } = useToastContext();
  return (
    <button
      className={clsx("text-16/regular", isActivated ? "text-theme-black" : "text-theme-gray")}
      onClick={
        isActivated
          ? handleClick
          : () => {
              console.log("HI!");
              setToastContext(<Toast message="아직 준비 중인 기능이예요." isPositive={false} />);
            }
      }
    >
      {tabName}
    </button>
  );
};

export const Header = () => {
  return (
    <div className="sticky top-0 z-30 flex w-full flex-col bg-theme-white">
      {/* Header element */}
      <div className="flex items-center justify-between px-[60px] py-8">
        {/* Logo */}
        <button
          type="button"
          className="flex flex-row items-center justify-center gap-2.5"
          onClick={() => navigate("/")}
        >
          <StaticImage
            src="../../../assets/images/Logo.png"
            alt="BV Logo"
            placeholder="none"
            layout="fixed"
            width={160}
            height={45}
          />
          <div className="text-20/regular text-theme-black">기술 블로그</div>
        </button>
        {/* Tabs */}
        <div className="flex items-center justify-center gap-[50px]">
          <Tab
            tabName="Tech"
            isActivated={true}
            handleClick={() => {
              navigate("/tech");
            }}
          />
          <Tab tabName="Research" isActivated={false} />
          <Tab tabName="블록체인 밸리" isActivated={false} />
        </div>
      </div>
      {/* Divider */}
      <div className="h-[1px] w-full bg-theme-primary" />
    </div>
  );
};

export default Header;
