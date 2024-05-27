import { GetStaticProps, NextPage } from "next";
import { Link } from "../../components/atoms/Link";
import { PageHeadProps } from "../../components/atoms/PageHead";
import { PageFooterProps } from "../../components/organisms/PageFooter";
import { PageHeaderProps } from "../../components/organisms/PageHeader";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate";
import { ArticleSummary } from "../../lib/domain/Models/ArticleSummary";
import { BlogItems } from "../../lib/domain/Models/BlogItems";
import { blogRepository } from "../../lib/repository/BlogRepository";
import { zennArticleRepository } from "../../lib/repository/ZennArticleRepository";

export type BlogIndexPageProps = {
  blogs: BlogItems;
  rssFeeds: {
    zenn: ArticleSummary[];
  };
  totalCount: number;
  offset: number;
  limit: number;
};

// export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
//   const pageResult = await blogRepository.getPages();
//   return {
//     props: {
//       blogs: pageResult.contents,
//       totalCount: pageResult.totalCount,
//       offset: pageResult.offset,
//       limit: pageResult.limit,
//     },
//   };
// };

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  const blogs = await blogRepository.getPages({ limit: 6 });
  const zennArticles = await zennArticleRepository.getArticles(6);
  return {
    props: {
      blogs,
      rssFeeds: {
        zenn: zennArticles,
      },
      totalCount: blogs.totalCount,
      offset: blogs.offset,
      limit: blogs.limit,
    },
  };
};

const BlogIndexPage: NextPage<BlogIndexPageProps> = ({
  blogs,
  // totalCount,
  // offset,
  // limit,
  rssFeeds,
}) => {
  console.log(JSON.stringify(rssFeeds.zenn, undefined, 2));
  console.log(JSON.stringify(blogs, undefined, 2));

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
      asideProps={{}}
      footerProps={footerProps}
    >
      <p>準備中...</p>
      {/* <div>
        <pre>
          {JSON.stringify({ blogs, totalCount, offset, limit }, undefined, 2)}
        </pre>
      </div>
      <hr />
      <div className="">
        {blogs.map((blog) => (
          <PostSummaryItem key={blog.id} blog={blog} />
        ))}
      </div> */}
      <div className="">
        <h2>blog</h2>
        {blogs.items.map((blog) => (
          <div className="" key={blog.id}>
            <h3>
              {JSON.stringify(blog.link, undefined, 2)}
              <Link {...blog.link}>{blog.title}</Link>
            </h3>
            <img src={blog.thumbnail.url} alt={blog.title} />
            <p>{blog.publishedAt.display}</p>
          </div>
        ))}
      </div>
      <div className="">
        <h2>zenn.dev</h2>
        {rssFeeds.zenn.map((item) => (
          <div key={item.id}>
            <h3>
              <Link {...item.link}>{item.title}</Link>
            </h3>
            <img src={item.thumbnail.url} alt={item.title} />
            <p>{item.publishedAt?.display}</p>
          </div>
        ))}
      </div>
    </DefaultTemplate>
  );
};

export default BlogIndexPage;
