import { GetStaticProps, NextPage } from "next";
import { PageHeadProps } from "../../components/atoms/PageHead";
import { PageFooterProps } from "../../components/organisms/PageFooter";
import { PageHeaderProps } from "../../components/organisms/PageHeader";
import { PostSummaryItem } from "../../components/organisms/PostSummaryItem";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate";
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
  const headProps: PageHeadProps = {
    pageType: "list",
    title: "ブログ記事一覧",
    description: "",
    keywords: [],
  };
  const headerProps: PageHeaderProps = {
    //
  };
  const footerProps: PageFooterProps = {
    //
  };

  return (
    <DefaultTemplate
      headProps={headProps}
      headerProps={headerProps}
      footerProps={footerProps}
    >
      <div>
        <pre>
          {JSON.stringify({ blogs, totalCount, offset, limit }, undefined, 2)}
        </pre>
      </div>
      <hr />
      <div className="">
        {blogs.map((blog) => (
          <PostSummaryItem key={blog.id} blog={blog} />
        ))}
      </div>
    </DefaultTemplate>
  );
};

export default BlogIndexPage;
