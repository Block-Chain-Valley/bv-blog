import Toast from "@/components/Popup/Toast";
import { useMobileContext } from "@/context/MobileContext";
import { useToastContext } from "@/context/ToastContext";
import clsx from "clsx";
import { navigate } from "gatsby";
import React from "react";

export interface TabProps {
  tabName: string;
  isActivated: boolean;
  handleClick?: () => void;
}

export const Tab = ({ tabName, isActivated, handleClick }: TabProps) => {
  const { setToastContext } = useToastContext();
  const { isMobile } = useMobileContext();

  return (
    <button
      className={clsx(
        isMobile ? "flex items-center justify-center self-stretch text-13/regular" : "text-16/regular",
        isActivated ? "text-theme-black" : "text-theme-gray",
      )}
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

export const Tabs = () => {
  const { isMobile } = useMobileContext();

  return (
    <div
      className={clsx(
        "flex",
        isMobile ? "my-2.5 flex-col items-start gap-5" : "items-center justify-center gap-[50px]",
      )}
    >
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
  );
};
