import { IGatsbyImageData } from "gatsby-plugin-image";

export enum TagTypes {
  WEB_CLIENT = "Web Client",
  BLOCKCHAIN = "Blockchain",
  ETC = "Etc.",
  SMART_CONTRACT = "Smart Contract",
  FRAMEWORK = "Framework",
}

export interface ArticleItemTypes {
  image?: IGatsbyImageData;
  title: string;
  description: string;
  tags: TagTypes[];
}
