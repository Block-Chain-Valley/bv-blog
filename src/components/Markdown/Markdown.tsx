import clsx from "clsx";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "./Code";
import Pre from "./Pre";

export const Markdown = ({ body }: { body: string }) => {
  return (
    <ReactMarkdown
      className={clsx("prose max-w-none", "mobile:prose-sm mobile:w-full")}
      remarkPlugins={[remarkGfm]}
      components={{ code: Code, pre: Pre }}
    >
      {body}
    </ReactMarkdown>
  );
};

export default Markdown;
