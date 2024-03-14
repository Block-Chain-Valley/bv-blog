import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Code from "./Code";
import Pre from "./Pre";

export const Markdown = ({ body }: { body: string }) => {
  return (
    <ReactMarkdown className="prose max-w-none" remarkPlugins={[remarkGfm]} components={{ code: Code, pre: Pre }}>
      {body}
    </ReactMarkdown>
  );
};

export default Markdown;
