import { useMobileContext } from "@/context/MobileContext";
import { ArticleItemTypes } from "@/utils";
import clsx from "clsx";
import { navigate } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useState } from "react";
import Tag from "../Tag/Tag";

export type ArticleProps = ArticleItemTypes;

export const Article = ({ image, title, description, tags, slug }: ArticleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useMobileContext();
  const thumbnailOptions: Partial<IGatsbyImageData> = isMobile
    ? { layout: "constrained" }
    : { layout: "fixed", width: 196, height: 196 };

  return (
    <div className={clsx("flex w-full flex-col items-start gap-5", "pc:flex-row pc:items-center pc:gap-14")}>
      {/* Image */}
      <GatsbyImage
        image={{ ...image, ...thumbnailOptions }}
        alt="article"
        className={clsx("move-transition", isHovered && "translate-y-[-8px]")}
      />
      {/* Article */}
      <div className={clsx("flex flex-col items-start gap-2.5", "pc:gap-5")}>
        <button
          type="button"
          className={clsx(
            "soft-transition text-left text-16/semi-bold text-theme-black",
            "pc:text-24/semi-bold",
            isHovered && "text-theme-primary",
          )}
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
        <div className={clsx("text-13/regular text-theme-black", "pc:text-16/regular")}>{description}</div>
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
