import { IGatsbyImageData } from "gatsby-plugin-image";

export enum TagTypes {
  WEB_CLIENT = "Web Client",
  BLOCKCHAIN = "Blockchain",
  ETC = "Etc.",
  SMART_CONTRACT = "Smart Contract",
  FRAMEWORK = "Framework",
}

export enum Article {
  TECH = "Tech",
  RESEARCH = "Research",
}

export enum Team {
  DEV = "Development Team",
  RESEARCH = "Research Team",
}

export interface ArticleItemTypes {
  mobileImage: IGatsbyImageData;
  pcImage: IGatsbyImageData;
  title: string;
  description: string;
  tags: TagTypes[];
  types: Article;
  slug: string;
}
