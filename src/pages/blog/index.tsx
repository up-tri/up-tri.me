import { GetStaticProps, NextPage } from "next";
import { PageHeadProps } from "../../components/atoms/PageHead";
import { PageFooterProps } from "../../components/organisms/PageFooter";
import { PageHeaderProps } from "../../components/organisms/PageHeader";
import { DefaultTemplate } from "../../components/templates/DefaultTemplate";
import { Blog } from "../../lib/domain/Models/Blog";
import { RssItem } from "../../lib/domain/Models/RssItem";
import { blogRepository } from "../../lib/repository/BlogRepository";
import { zennArticleRepository } from "../../lib/repository/ZennArticleRepository";

export type BlogIndexPageProps = {
  blogs: Blog[];
  rssFeeds: {
    zenn: RssItem[];
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
  const pageResult = await blogRepository.getPages(6);
  const zennArticles = await zennArticleRepository.getArticles(6);
  return {
    props: {
      blogs: pageResult.contents,
      rssFeeds: {
        zenn: zennArticles,
      },
      totalCount: pageResult.totalCount,
      offset: pageResult.offset,
      limit: pageResult.limit,
    },
  };
};

const BlogIndexPage: NextPage<BlogIndexPageProps> = ({
  // blogs,
  // totalCount,
  // offset,
  // limit,
  rssFeeds,
}) => {
  console.log(JSON.stringify(rssFeeds.zenn, undefined, 2));

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
        <h2>zenn.dev</h2>
        {rssFeeds.zenn.map((item) => (
          <div key={item.guid}>
            <h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
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
