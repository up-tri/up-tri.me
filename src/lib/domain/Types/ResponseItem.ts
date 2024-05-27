import { MicroCMSImage } from "microcms-js-sdk";
import { Category } from "./Category";
import { ContentBase } from "./ContentBase";
import { ListBase } from "./ListBase";

export type ResponseItem = ContentBase & {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: Category | null;
};

export type ResponseItems = ListBase<ResponseItem>;
