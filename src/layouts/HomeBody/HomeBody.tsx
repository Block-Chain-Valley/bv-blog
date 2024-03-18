import ArticleGroup from "@/components/Article/ArticleGroup";
import { Article, ArticleItemTypes } from "@/utils";
import clsx from "clsx";
import { navigate } from "gatsby";
import React from "react";

export interface HomeBodyProps {
  articleBriefItems: ArticleItemTypes[];
  isHome?: boolean;
}

export const HomeBody = ({ articleBriefItems, isHome = true }: HomeBodyProps) => {
  return (
    <div className={clsx("flex w-full flex-col items-start px-8 py-2.5", "pc:w-[1000px] pc:px-0 pc:py-10")}>
      {/* Recent */}
      {isHome && (
        <ArticleGroup
          groupTitle="최근 게시글"
          articleBriefItems={[articleBriefItems.at(0)]}
          moreButtonVisible={false}
        />
      )}
      {/* Tech */}
      <ArticleGroup
        groupTitle="Tech"
        articleBriefItems={articleBriefItems.filter((article) => article.types === Article.TECH)}
        moreButtonVisible={isHome ? true : false}
        handleMoreButtonClick={() => {
          navigate("/tech");
        }}
      />
    </div>
  );
};

export default HomeBody;
