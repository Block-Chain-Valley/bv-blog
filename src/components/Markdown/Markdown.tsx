import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
