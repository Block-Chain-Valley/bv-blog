import { ClassAttributes, HTMLAttributes } from "react";
import React from "react";
import { ExtraProps } from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code = (props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps) => {
  const match = /language-(\w+)/.exec(props.className || "");

  if (!match) return <code {...props} />;
  return (
    <SyntaxHighlighter
      language={match[1]}
      showLineNumbers={true}
      style={vscDarkPlus}
      lineNumberStyle={{
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "0.8rem",
        marginRight: "1rem",
      }}
    >
      {String(props.children)}
    </SyntaxHighlighter>
  );
};

export default Code;
