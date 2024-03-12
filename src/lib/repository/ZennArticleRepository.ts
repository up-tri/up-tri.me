import Parser from "rss-parser";
import { appConfig } from "../consts/appConfig";
import { RssItem } from "../domain/Models/RssItem";
import { rssResponseFilter } from "../domain/filter/rssResponseFilter";

export class ZennArticleRepository {
  private endpoint: string = `https://zenn.dev/${appConfig.rssFeed.zenn.userSlug}/feed`;

  public async getArticles(limit: number = 10): Promise<RssItem[]> {
    const parser = new Parser<RssItem>();
    const feed = await parser.parseURL(this.endpoint);
    return rssResponseFilter(feed.items).slice(0, limit);
  }
}

export const zennArticleRepository = new ZennArticleRepository();
