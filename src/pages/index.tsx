import Popup from "@/components/Popup/Popup";
import Toast from "@/components/Popup/Toast";
import Seo from "@/components/Seo/Seo";
import { useMobileContext } from "@/context/MobileContext";
import { GetPostsQuery } from "@/graphql";
import { Banner, Footer, Header, HomeBody } from "@/layouts";
import { articleTypeMapper, blogConfig, tagTypeMapper } from "@/utils";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { useMemo } from "react";

export const getPostsQuery = graphql`
  query GetPosts {
    allContentfulPost(sort: { createdAt: DESC }, limit: 5) {
      nodes {
        id
        title
        description
        tags
        articleType
        slug
        createdAt(formatString: "YYYY.MM.DD")
        userEmail
        squareThumbnail {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED)
        }
        rectangleThumbnail {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 1000, height: 500)
        }
      }
    }
    allContentfulBanner {
      nodes {
        banner {
          gatsbyImageData
        }
      }
    }
  }
`;

export const HomeIndex = ({ data }: PageProps<GetPostsQuery>) => {
  const { isMobile } = useMobileContext();

  const articles = data.allContentfulPost.nodes;
  const articleBriefItems = useMemo(
    () =>
      articles.map((article) => {
        return {
          image: (isMobile
            ? article.rectangleThumbnail.gatsbyImageData
            : article.squareThumbnail.gatsbyImageData) as IGatsbyImageData,
          title: article.title,
          description: article.description,
          tags: article.tags.map((tag) => {
            return tagTypeMapper(tag);
          }),
          types: articleTypeMapper(article.articleType),
          slug: article.slug,
        };
      }),
    [articles, isMobile],
  );
  const banner = data.allContentfulBanner.nodes.at(0).banner.gatsbyImageData as IGatsbyImageData;

  return (
    <>
      <Seo title={blogConfig.title} description={blogConfig.description} />
      <Popup />
      <div className="flex flex-col items-center">
        <Header />
        {!isMobile && <Banner banner={banner} />}
        <HomeBody articleBriefItems={articleBriefItems} />
        <Footer />
      </div>
    </>
  );
};

export default HomeIndex;
