import { useMobileContext } from "@/context/MobileContext";
import { TagTypes } from "@/utils";
import clsx from "clsx";
import React from "react";

const getTagClasses = (type: TagTypes) => {
  switch (type) {
    case TagTypes.SMART_CONTRACT:
      return "bg-primary-400";
    case TagTypes.FRAMEWORK:
      return "bg-theme-pointBlue";
    case TagTypes.WEB_CLIENT:
      return "bg-theme-pointGreen";
    case TagTypes.BLOCKCHAIN:
      return "bg-theme-pointYellow";
    case TagTypes.ETC:
      return "bg-gray-500";
  }
};

export const Tag = ({ type }: { type: TagTypes }) => {
  const { isMobile } = useMobileContext();
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center gap-2.5 rounded-[4px] px-3 py-1 text-10/regular text-theme-white",
        "pc:text-13/regular",
        getTagClasses(type),
      )}
    >
      <p>{type}</p>
    </div>
  );
};

export default Tag;
