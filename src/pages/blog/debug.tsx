import { GetStaticProps, NextPage } from "next";
import { Blog } from "../../lib/domain/Models/Blog";
import { blogRepository } from "../../lib/repository/BlogRepository";

export type BlogIndexPageProps = {
  blogs: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  const pageResult = await blogRepository.getPages();
  return {
    props: {
      blogs: pageResult.contents,
      totalCount: pageResult.totalCount,
      offset: pageResult.offset,
      limit: pageResult.limit,
    },
  };
};

const BlogIndexPage: NextPage<BlogIndexPageProps> = ({
  blogs,
  totalCount,
  offset,
  limit,
}) => {
  return (
    <div>
      <pre>
        {JSON.stringify({ blogs, totalCount, offset, limit }, undefined, 2)}
      </pre>
    </div>
  );
};

export default BlogIndexPage;
