import Toast from "@/components/Popup/Toast";
import { useToastContext } from "@/context/ToastContext";
import clsx from "clsx";
import { navigate } from "gatsby";
import React from "react";
import { UIProps } from "src/props";

export interface TabProps {
  tabName: string;
  isActivated: boolean;
  handleClick?: () => void;
}

export const Tab = ({ tabName, isActivated, handleClick }: TabProps) => {
  const { setToastContext } = useToastContext();

  return (
    <button
      className={clsx(
        "flex items-center justify-center self-stretch text-13/regular",
        "pc:text-16/regular",
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

export interface TabsProps extends UIProps.Div {}

export const Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <div
      className={clsx(
        "my-2.5 flex flex-col items-start gap-5",
        "pc:flex-row pc:items-center pc:justify-center pc:gap-[50px]",
        className,
      )}
      {...props}
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
