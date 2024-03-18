import { ArticleItemTypes } from "@/utils";
import clsx from "clsx";
import React from "react";
import Article from "./Article";
import MoreArticleButton from "./MoreArticleButton";

export interface ArticleGroupProps {
  groupTitle: string;
  articleBriefItems: ArticleItemTypes[];
  moreButtonVisible?: boolean;
  handleMoreButtonClick?: () => void;
}

export const ArticleGroup = ({
  groupTitle,
  articleBriefItems,
  moreButtonVisible = true,
  handleMoreButtonClick,
}: ArticleGroupProps) => {
  return (
    <div className={clsx("flex w-full flex-col items-start gap-10 py-5", "pc:py-10")}>
      {/* 제목 */}
      <div className={clsx("text-20/semi-bold text-theme-black", "pc:text-30/semi-bold")}>{groupTitle}</div>
      {/* 아티클 */}
      <div className="flex flex-col items-start gap-[60px]">
        {articleBriefItems.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
      {/* 더 많은 아티클 보기 버튼 */}
      {moreButtonVisible && (
        <div className="flex flex-col items-center justify-center gap-2.5 self-stretch">
          <MoreArticleButton description="더 많은 아티클 보기" handleClick={handleMoreButtonClick} />
        </div>
      )}
    </div>
  );
};

export default ArticleGroup;
