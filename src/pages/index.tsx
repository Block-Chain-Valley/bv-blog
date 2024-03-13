import { GetPostsQuery } from "@/graphql";
import { Banner, Footer, Header, HomeBody } from "@/layouts";
import { articleTypeMapper, tagTypeMapper } from "@/utils/mapper";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { useMemo } from "react";

export const getPostsQuery = graphql`
  query GetPosts {
    allContentfulPost(sort: { createdAt: DESC }) {
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
        dpThumbnail {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 600, height: 300)
          publicUrl
        }
        content {
          content
        }
      }
    }
  }
`;

export const HomeIndex = ({ data }: PageProps<GetPostsQuery>) => {
  const articles = data.allContentfulPost.nodes;
  const articleBriefItems = useMemo(
    () =>
      articles.map((article) => {
        return {
          image: article.homeThumbnail.gatsbyImageData as IGatsbyImageData,
          title: article.title,
          description: article.description,
          tags: article.tags.map((tag) => {
            console.log(tag);
            return tagTypeMapper(tag);
          }),
          types: articleTypeMapper(article.articleType),
        };
      }),
    [articles],
  );
  console.log(articleBriefItems);

  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
      <HomeBody articleBriefItems={articleBriefItems} />
      <Footer />
    </div>
  );
};

export default HomeIndex;
