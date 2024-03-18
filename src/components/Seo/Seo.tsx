import { SeoMetaDataQuery } from "@/graphql";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
  featuredImage?: IGatsbyImageData;
}

const Seo = (props: SeoProps) => {
  const { site, featuredImage } = useStaticQuery<SeoMetaDataQuery>(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          og {
            siteName
            twitterCreator
          }
        }
      }
      featuredImage: file(absolutePath: { glob: "**/src/assets/images/OgImage.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200)
        }
      }
    }
  `);

  const title = props.title ?? site?.siteMetadata?.title;
  const description = props.description ?? site?.siteMetadata?.description;
  const ogImage = props.featuredImage ?? (featuredImage?.childImageSharp?.gatsbyImageData as IGatsbyImageData);
  const location = useLocation();

  const metas = [
    {
      name: "description",
      content: description,
    },
    {
      name: "og:image",
      content: ogImage.images.fallback.src,
    },
    {
      name: "og:image:width",
      content: `${ogImage.width}`,
    },
    {
      name: "og:image:height",
      content: `${ogImage.height}`,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:site_name",
      content: site!.siteMetadata!.og!.siteName,
    },
    {
      name: "og:url",
      content: `${site?.siteMetadata?.siteUrl}${location.pathname}`,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:image",
      content: ogImage.images.fallback.src,
    },
    {
      name: "twitter:creator",
      content: site!.siteMetadata!.og!.twitterCreator,
    },
  ];

  if (props.keywords) {
    metas.push({
      name: "keywords",
      content: props.keywords,
    });
  }

  return (
    <>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {metas.map((meta) => (
        <meta key={meta.name} name={meta.name} content={meta.content} />
      ))}
    </>
  );
};

export default Seo;
