import classNames from "classnames";
import dayjs from "dayjs";
import { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import { PageHeadProps } from "../../../components/atoms/PageHead";
import { PageFooterProps } from "../../../components/organisms/PageFooter";
import { PageHeaderProps } from "../../../components/organisms/PageHeader";
import { DefaultTemplate } from "../../../components/templates/DefaultTemplate";
import { notFoundRedirect } from "../../../lib/consts/notFoundRedirect";
import { Blog } from "../../../lib/domain/Models/Blog";
import { blogRepository } from "../../../lib/repository/BlogRepository";
import style from "./blogContent.module.scss";

type BlogPageProps = {
  blog: Blog;
};

export const getStaticPaths = (async () => {
  const blogIds = await blogRepository.getIds();
  console.log({ blogIds });
  const paths = blogIds.map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const slug = params?.slug;
  if (!slug || Array.isArray(slug)) return notFoundRedirect;

  try {
    const blog = await blogRepository.getThePage(slug);
    return { props: { blog } };
  } catch (error) {
    console.error(error);
    return notFoundRedirect;
  }
}) satisfies GetServerSideProps<{
  blog: Blog;
}>;

const BlogPage: NextPage<BlogPageProps> = (props) => {
  if (!props.blog) return <></>;
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
  const createdAt = dayjs(props.blog.createdAt).format("YYYY-MM-DD");
  const revisedAt = dayjs(props.blog.revisedAt).format("YYYY-MM-DD");

  return (
    <DefaultTemplate
      headProps={headProps}
      headerProps={headerProps}
      footerProps={footerProps}
      isPost
    >
      <article>
        <header className={style.blogHeader}>
          <div className={style.blogHeader__titleBox}>
            <h1 className={style.blogHeader__title}>{props.blog.title}</h1>
          </div>
          <div className={style.blogHeader__captionsBox}>
            <p className={style.blogHeader__caption}>
              <span className={style.blogHeader__captionItem}>
                <i
                  className={classNames(
                    "fa-solid fa-pen",
                    style.blogHeader__captionIcon
                  )}
                  aria-label="投稿日:"
                />
                {createdAt}
              </span>
              {createdAt !== revisedAt && (
                <span className={style.blogHeader__captionItem}>
                  <i
                    className={classNames(
                      "fa-solid fa-clock-rotate-left",
                      style.blogHeader__captionIcon
                    )}
                    aria-label="更新日:"
                  />
                  {revisedAt}
                </span>
              )}
            </p>
            {props.blog.category && (
              <>
                <hr className={style.blogHeader__divider} />
                <p className={style.blogHeader__caption}>
                  <a href={`/blog/category/${props.blog.category.id}`}>
                    {props.blog.category.name}
                  </a>
                </p>
              </>
            )}
          </div>
        </header>
        <div className={style.blogContent}>
          {props.blog.content && (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: props.blog.content }}
            />
          )}
        </div>
        <footer className={style.blogFooter}>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/blog" className={style.blogFooter__returnHomeButton}>
            記事一覧へ戻る
          </a>
        </footer>
      </article>
      {/* <p>homeへ戻る</p> */}
    </DefaultTemplate>
  );
};

export default BlogPage;
