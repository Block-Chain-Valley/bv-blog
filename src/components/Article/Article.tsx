import { ArticleItemTypes } from "@/utils";
import clsx from "clsx";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Tag from "../Tag/Tag";

export type ArticleProps = ArticleItemTypes;

export const Article = ({ image, title, description, tags, slug }: ArticleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex w-full items-center gap-14">
      {/* Image */}
      <GatsbyImage
        image={{ ...image, layout: "fixed", width: 196, height: 196 }}
        alt="article"
        className={clsx("move-transition", isHovered && "translate-y-[-8px]")}
      />
      {/* Article */}
      <div className="flex flex-col items-start gap-5">
        <button
          type="button"
          className={clsx("soft-transition text-24/semi-bold text-theme-black", isHovered && "text-theme-primary")}
          onClick={() => {
            navigate(`/post/${slug}`);
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
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
