import { ArticleItemTypes } from "@/utils/types";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Tag from "../Tag/Tag";

export type ArticleProps = ArticleItemTypes;

export const Article = ({ image, title, description, tags, slug }: ArticleProps) => {
  return (
    <div className="flex w-full items-center gap-10">
      {/* Image */}
      <div className="h-[144px] w-[144px]">
        <GatsbyImage image={{ ...image, layout: "fixed" }} alt="article" />
      </div>
      {/* Article */}
      <div className="flex flex-col items-start gap-5">
        <button
          type="button"
          className="text-20/semi-bold text-theme-black"
          onClick={() => {
            navigate(`/post/${slug}`);
          }}
        >
          {title}
        </button>
        <div className="text-16/regular text-theme-black">{description}</div>
        <div className="flex items-start gap-3">
          {/* tags */}
          {tags.map((tag, index) => (
            <Tag key={index} type={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
