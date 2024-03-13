import { GetPostBySlugQuery } from "@/graphql";
import { PageProps, graphql } from "gatsby";
import React from "react";

export const getPostBySlugQuery = graphql`
  query GetPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
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
`;

export const Post = ({ data }: PageProps<GetPostBySlugQuery>) => {
  console.log(data);
  return (
    <div>
      <h1>HI!</h1>
    </div>
  );
};

export default Post;
