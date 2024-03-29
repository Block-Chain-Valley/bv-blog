import type { GatsbyConfig } from "gatsby";
import adapter from "gatsby-adapter-netlify";

// TODO: 도메인 등록 후 수정

const config: GatsbyConfig = {
  adapter: adapter(),
  siteMetadata: {
    title: `블록체인 밸리 블로그`,
    author: `blockchainvalley`,
    description: "고려대학교 블록체인 학회 블록체인 밸리 블로그입니다.",
    siteUrl: `https://blockchainvalley.netlify.app/`,
    og: {
      siteName: "블록체인 밸리 블로그",
      twitterCreator: "@blockchainkor",
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        web: [
          {
            name: `Pretendard`,
            file: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css`,
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icons/Icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./tools/graphql/gatsby-graphql.ts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://blockchainvalley.netlify.app/",
        sitemap: "https://blockchainvalley.netlify.app/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};

export default config;
