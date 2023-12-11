import classNames from "classnames";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
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
type BlogPageParams = NextParsedUrlQuery & {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<BlogPageParams> = () => {
  const slugs: string[] = [];
  // const slugs = ["6irhhq2vhe5"];
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  BlogPageProps,
  BlogPageParams
> = async ({ params }) => {
  if (params) {
    try {
      const blog = await blogRepository.getThePage(params.slug);
      if (blog) {
        return { props: { blog } };
      }
    } catch (error) {
      console.log(error);
    }
  }

  return notFoundRedirect;
};

const BlogPage: NextPage<BlogPageProps> = (props) => {
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
      isPost
    >
      <div className={style.blogHeader}>
        <h1 className={style.blogHeader__title}>{props.blog.title}</h1>
        <hr className={style.blogHeader__divider} />
        <p className={style.blogHeader__caption}>
          <i
            className={classNames(
              "fa-solid fa-pen",
              style.blogHeader__captionIcon
            )}
          />
          {dayjs(props.blog.createdAt).format("YYYY-MM-DD")}
        </p>
        <p className={style.blogHeader__caption}>
          <i
            className={classNames(
              "fa-solid fa-clock-rotate-left",
              style.blogHeader__captionIcon
            )}
          />
          {dayjs(props.blog.revisedAt).format("YYYY-MM-DD")}
        </p>
        {/* <p>{props.blog.category?.name}</p> */}
      </div>
      <div className={style.blogContent}>
        {props.blog.content && (
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: props.blog.content }}
          />
        )}
      </div>
      {/* <p>homeへ戻る</p> */}
    </DefaultTemplate>
  );
};

export default BlogPage;
