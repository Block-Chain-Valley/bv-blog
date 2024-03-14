import React, { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export const Pre = (props: ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLPreElement> & ExtraProps) => {
  return <div className="flex flex-col rounded-lg bg-theme-black px-3 py-1">{props.children}</div>;
};

export default Pre;
