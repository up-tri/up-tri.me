import { MicroCMSImage } from "microcms-js-sdk";
import { ContentBase } from "../Types/ContentBase";
import { Category } from "./Category";

export type Blog = ContentBase & {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: Category | null;
};
