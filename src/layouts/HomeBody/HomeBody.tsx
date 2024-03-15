import ArticleGroup from "@/components/Article/ArticleGroup";
import { useMobileContext } from "@/context/MobileContext";
import { Article, ArticleItemTypes } from "@/utils";
import clsx from "clsx";
import { navigate } from "gatsby";
import React from "react";

export interface HomeBodyProps {
  articleBriefItems: ArticleItemTypes[];
  isHome?: boolean;
}

export const HomeBody = ({ articleBriefItems, isHome = true }: HomeBodyProps) => {
  const { isMobile } = useMobileContext();

  return (
    <div className={clsx("flex flex-col items-start", isMobile ? "w-full px-8 py-2.5" : "w-[1000px] py-10")}>
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
