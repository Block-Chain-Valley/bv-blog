import { GetPostBySlugQuery } from "@/graphql";
import { Footer, Header, PostBody } from "@/layouts";
import { teamMapper } from "@/utils/mapper";
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
      dpThumbnail {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 800, height: 400)
        publicUrl
      }
      body {
        body
      }
    }
  }
`;

export const Post = ({ data }: PageProps<GetPostBySlugQuery>) => {
  const { title, articleType, createdAt, dpThumbnail, body } = data.contentfulPost;
  const { name, team: rawTeam, year, profileText, profileImage } = data.contentfulUser;
  const team = teamMapper(rawTeam);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PostBody
        title={title}
        articleType={articleType}
        createdAt={createdAt}
        thumbnail={dpThumbnail.gatsbyImageData}
        body={body.body}
        name={name}
        team={team}
        year={year}
        profileText={profileText}
        profileImage={profileImage.gatsbyImageData}
      />
      <Footer />
    </div>
  );
};

export default Post;
