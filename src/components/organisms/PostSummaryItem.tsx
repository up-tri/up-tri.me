import React from "react";
import { Blog } from "../../lib/domain/Models/BlogItem";
import style from "./PostSummaryItem.module.scss";

export type PostSummaryItemProps = {
  blog: Blog;
};
export const PostSummaryItem: React.FC<PostSummaryItemProps> = ({ blog }) => {
  return (
    <div className={style.PostSummaryItem}>
      <p>{blog.title}</p>
    </div>
  );
};
