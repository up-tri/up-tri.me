import dayjs from "dayjs";
import { appConfig } from "../../consts/appConfig";
import { ArticleDetail } from "../Models/ArticleDetail";
import { ArticleSummary } from "../Models/ArticleSummary";
import { BlogItems } from "../Models/BlogItems";
import { ResponseItem, ResponseItems } from "../Types/ResponseItem";

export function blogItemResponseFilter(response: ResponseItem): ArticleDetail {
  return {
    id: response.id,
    title: response.title || "",
    link: {
      type: "internal",
      path: `/articles/posts/${response.id}`,
    },
    thumbnail: response.eyecatch
      ? {
          url: response.eyecatch.url,
          caption: `記事「${response.title}」のサムネイル画像`,
        }
      : {
          url: appConfig.assets.noImage.url,
          caption: appConfig.assets.noImage.caption,
        },
    publishedAt: {
      display: dayjs(response.publishedAt).format("YYYY年MM月DD日"),
      iso: dayjs(response.publishedAt).toISOString(),
    },
    updatedAt: {
      display: dayjs(response.revisedAt).format("YYYY年MM月DD日"),
      iso: dayjs(response.revisedAt).toISOString(),
    },
    content: response.content || "",
    category: response.category
      ? {
          id: response.category.id,
          label: response.category.name,
        }
      : null,
  };
}

export function blogListResponseFilter(response: ResponseItems): BlogItems {
  const items = response.contents
    .filter(
      (
        item
        // `eyecatch` のみundefinedを許容する
      ): item is Omit<Required<ResponseItem>, "eyecatch"> & {
        eyecatch: ResponseItem["eyecatch"];
      } =>
        !!item.title && !!item.content && !!item.revisedAt && !!item.publishedAt
    )
    .map<ArticleSummary>((item) => ({
      id: item.id,
      title: item.title,
      link: {
        type: "internal",
        path: `/articles/posts/${item.id}`,
      },
      thumbnail: item.eyecatch
        ? {
            url: item.eyecatch.url,
            caption: `記事「${item.title}」のサムネイル画像`,
          }
        : {
            url: appConfig.assets.noImage.url,
            caption: appConfig.assets.noImage.caption,
          },
      publishedAt: {
        display: dayjs(item.publishedAt).format("YYYY年MM月DD日"),
        iso: dayjs(item.publishedAt).toISOString(),
      },
      updatedAt: {
        display: dayjs(item.revisedAt).format("YYYY年MM月DD日"),
        iso: dayjs(item.revisedAt).toISOString(),
      },
      content: item.content,
      category: item.category
        ? {
            id: item.category.id,
            label: item.category.name,
          }
        : null,
    }));

  return {
    items,
    totalCount: response.totalCount,
    offset: response.offset,
    limit: response.limit,
  };
}
