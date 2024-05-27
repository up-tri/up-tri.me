import dayjs from "dayjs";
import Parser from "rss-parser";
import { appConfig } from "../../consts/appConfig";
import { ArticleSummary } from "../Models/ArticleSummary";

export function rssResponseFilter(response: Parser.Item[]): ArticleSummary[] {
  return response
    .filter(
      (item): item is Required<Parser.Item> =>
        !!item.guid &&
        !!item.title &&
        !!item.link &&
        !!item.pubDate &&
        !!item.content
    )
    .map<ArticleSummary>((item) => ({
      id: item.guid,
      title: item.title,
      link: { type: "external", url: item.link },
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
      category: null,
    }));
}
