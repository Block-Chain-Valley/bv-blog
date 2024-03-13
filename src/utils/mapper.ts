import { ArticleTypes, TagTypes } from "./types";

export const tagTypeMapper = (rawTag: string) => {
  switch (rawTag) {
    case "Web Client":
      return TagTypes.WEB_CLIENT;
    case "Blockchain":
      return TagTypes.BLOCKCHAIN;
    case "Etc.":
      return TagTypes.ETC;
    case "Smart Contract":
      return TagTypes.SMART_CONTRACT;
    case "Framework":
      return TagTypes.FRAMEWORK;
    default:
      return TagTypes.ETC;
  }
};

export const articleTypeMapper = (rawArticleType: string) => {
  switch (rawArticleType) {
    case "Tech":
      return ArticleTypes.TECH;
    case "Research":
      return ArticleTypes.RESEARCH;
    default:
      throw Error("Invalid article type");
  }
};
