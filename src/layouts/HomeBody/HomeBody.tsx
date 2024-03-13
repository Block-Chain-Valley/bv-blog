import ArticleGroup from "@/components/Article/ArticleGroup";
import { Article, ArticleItemTypes, TagTypes } from "@/utils/types";
import React from "react";

export interface HomeBodyProps {
  articleBriefItems: ArticleItemTypes[];
}

export const HomeBody = ({ articleBriefItems }: HomeBodyProps) => {
  return (
    <div className="flex w-[1000px] flex-col items-start py-10">
      {/* Recent */}
      <ArticleGroup groupTitle="Recent" articleBriefItems={[articleBriefItems.at(0)]} moreButtonVisible={false} />
      {/* Tech */}
      <ArticleGroup
        groupTitle="Tech"
        articleBriefItems={articleBriefItems.filter((article) => article.types === Article.TECH)}
      />
    </div>
  );
};

export default HomeBody;
