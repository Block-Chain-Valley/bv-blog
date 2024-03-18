import Popup from "@/components/Popup/Popup";
import Seo from "@/components/Seo/Seo";
import { useMobileContext } from "@/context/MobileContext";
import { GetPostBySlugQuery } from "@/graphql";
import { Footer, Header, PostBody } from "@/layouts";
import { blogConfig, teamMapper } from "@/utils";
import { PageProps, graphql } from "gatsby";
import React from "react";

export const getPostBySlugQuery = graphql`
  query GetPostBySlug($slug: String!, $userEmail: String!) {
    contentfulUser(userEmail: { eq: $userEmail }) {
      userEmail
      name
      team
      year
      profileText
      profileImage {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED)
        publicUrl
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      articleType
      slug
      createdAt(formatString: "YYYY.MM.DD")
      squareThumbnail {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED)
        publicUrl
      }
      rectangleThumbnail {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED)
        publicUrl
      }
      body {
        body
      }
    }
  }
`;

export const Post = ({ data }: PageProps<GetPostBySlugQuery>) => {
  const { title, articleType, createdAt, squareThumbnail, rectangleThumbnail, body } = data.contentfulPost;
  const { name, team: rawTeam, year, profileText, profileImage } = data.contentfulUser;
  const { isMobile, isTablet } = useMobileContext();
  const team = teamMapper(rawTeam);

  return (
    <>
      <Seo title={title} description={blogConfig.description} featuredImage={rectangleThumbnail.gatsbyImageData} />
      <Popup />
      <div className="flex flex-col items-center">
        <Header />
        <PostBody
          title={title}
          articleType={articleType}
          createdAt={createdAt}
          thumbnail={isMobile && !isTablet ? squareThumbnail.gatsbyImageData : rectangleThumbnail.gatsbyImageData}
          body={body.body}
          name={name}
          team={team}
          year={year}
          profileText={profileText}
          profileImage={profileImage.gatsbyImageData}
        />
        <Footer />
      </div>
    </>
  );
};

export default Post;
