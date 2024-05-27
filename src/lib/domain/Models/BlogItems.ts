import { ArticleSummary } from "./ArticleSummary";

export type BlogItems = {
  items: ArticleSummary[];
  totalCount: number;
  offset: number;
  limit: number;
};
