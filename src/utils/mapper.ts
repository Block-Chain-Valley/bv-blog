import { Article, TagTypes, Team } from "./types";

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
      return Article.TECH;
    case "Research":
      return Article.RESEARCH;
    default:
      throw Error("Invalid article type");
  }
};

export const teamMapper = (rawTeam: string) => {
  switch (rawTeam) {
    case "Development Team":
      return Team.DEV;
    case "Research Team":
      return Team.RESEARCH;
    default:
      throw Error("Invalid team type");
  }
};

export const yearMapper = (year: number): string => {
  if (year <= 0) return year.toString();

  const suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
  const v = year % 100;
  return year + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};
