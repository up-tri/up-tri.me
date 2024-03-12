import dayjs from "dayjs";
import Parser from "rss-parser";
import { appConfig } from "../../consts/appConfig";
import { RssItem } from "../Models/RssItem";

export function rssResponseFilter(response: Parser.Item[]): RssItem[] {
  return response
    .map((item) => ({
      guid: item.guid,
      title: item.title,
      link: item.link,
      thumbnail: item.enclosure?.url
        ? {
            url: item.enclosure.url,
            caption: `記事「${item.title}」のサムネイル画像`,
          }
        : {
            url: appConfig.assets.noImage.url,
            caption: appConfig.assets.noImage.caption,
          },
      publishedAt: item.pubDate
        ? {
            display: dayjs(item.pubDate).format("YYYY年MM月DD日"),
            iso: dayjs(item.pubDate).toISOString(),
          }
        : null,
      content: item.content,
    }))
    .filter(
      (item): item is RssItem =>
        !!item.guid &&
        !!item.title &&
        !!item.link &&
        !!item.publishedAt &&
        !!item.content
    );
}
