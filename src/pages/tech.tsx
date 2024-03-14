import Popup from "@/components/Popup/Popup";
import Seo from "@/components/Seo/Seo";
import { GetTechIndexQuery } from "@/graphql";
import { Footer, Header, HomeBody } from "@/layouts";
import { articleTypeMapper, blogConfig, tagTypeMapper } from "@/utils";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { useMemo } from "react";

export const getTechIndexQuery = graphql`
  query GetTechIndex {
    allContentfulPost(filter: { articleType: { eq: "Tech" } }, sort: { createdAt: DESC }, limit: 10) {
      nodes {
        id
        title
        description
        tags
        articleType
        slug
        createdAt(formatString: "YYYY.MM.DD")
        userEmail
        homeThumbnail {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 144, height: 144)
          publicUrl
        }
      }
    }
  }
`;

export const TechIndex = ({ data }: PageProps<GetTechIndexQuery>) => {
  const articles = data.allContentfulPost.nodes;
  const articleBriefItems = useMemo(
    () =>
      articles.map((article) => {
        return {
          image: article.homeThumbnail.gatsbyImageData as IGatsbyImageData,
          title: article.title,
          description: article.description,
          tags: article.tags.map((tag) => {
            return tagTypeMapper(tag);
          }),
          types: articleTypeMapper(article.articleType),
          slug: article.slug,
        };
      }),
    [articles],
  );

  return (
    <>
      <Seo title={blogConfig.title} description={blogConfig.description} />
      <Popup />
      <div className="flex flex-col items-center">
        <Header />
        <HomeBody articleBriefItems={articleBriefItems} isHome={false} />
        <Footer />
      </div>
    </>
  );
};

export default TechIndex;
