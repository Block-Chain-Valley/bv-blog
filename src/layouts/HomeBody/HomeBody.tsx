import ArticleGroup from "@/components/Article/ArticleGroup";
import { ArticleItemTypes, ArticleTypes, TagTypes } from "@/utils/types";
import React from "react";

// Temporary
const Article = {
  title: "Hardhat과 Mocha, Chai를 이용한 스마트 컨트랙트 유닛 테스트",
  description:
    "예시 코드를 통하여 Hardhat과 Mocha, Chai에서 스마트 컨트랙트 유닛 테스트를 진행하는 방법을 알아보겠습니다.",
  tags: [TagTypes.SMART_CONTRACT, TagTypes.FRAMEWORK],
};

export interface HomeBodyProps {
  articleBriefItems: ArticleItemTypes[];
}

export const HomeBody = ({ articleBriefItems }: HomeBodyProps) => {
  return (
    <div className="flex flex-col items-start px-[200px] py-10">
      {/* Recent */}
      <ArticleGroup groupTitle="Recent" articleBriefItems={[articleBriefItems.at(0)]} moreButtonVisible={false} />
      {/* Tech */}
      <ArticleGroup
        groupTitle="Tech"
        articleBriefItems={articleBriefItems.filter((article) => article.types === ArticleTypes.TECH)}
      />
    </div>
  );
};

export default HomeBody;
