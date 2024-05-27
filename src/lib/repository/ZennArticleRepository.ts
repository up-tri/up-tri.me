import Parser from "rss-parser";
import { appConfig } from "../consts/appConfig";
import { ArticleSummary } from "../domain/Models/ArticleSummary";
import { rssResponseFilter } from "../domain/filter/rssResponseFilter";

export class ZennArticleRepository {
  private endpoint: string = `https://zenn.dev/${appConfig.rssFeed.zenn.userSlug}/feed`;

  public async getArticles(limit: number = 10): Promise<ArticleSummary[]> {
    const parser = new Parser();
    const feed = await parser.parseURL(this.endpoint);
    return rssResponseFilter(feed.items).slice(0, limit);
  }
}

export const zennArticleRepository = new ZennArticleRepository();
