import ArticleGroup from "@/components/Article/ArticleGroup";
import { Article, ArticleItemTypes, TagTypes } from "@/utils/types";
import { navigate } from "gatsby";
import React from "react";

export interface HomeBodyProps {
  articleBriefItems: ArticleItemTypes[];
  isHome?: boolean;
}

export const HomeBody = ({ articleBriefItems, isHome = true }: HomeBodyProps) => {
  return (
    <div className="flex w-[1000px] flex-col items-start py-10">
      {/* Recent */}
      {isHome && (
        <ArticleGroup groupTitle="Recent" articleBriefItems={[articleBriefItems.at(0)]} moreButtonVisible={false} />
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
