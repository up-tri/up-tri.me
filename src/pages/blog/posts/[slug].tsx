import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { notFoundRedirect } from "../../../lib/consts/notFoundRedirect";
import { Blog } from "../../../lib/domain/Models/Blog";
import { blogRepository } from "../../../lib/repository/BlogRepository";

type BlogPageProps = {
  blog: Blog;
};
type BlogPageParams = NextParsedUrlQuery & {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<BlogPageParams> = () => {
  const slugs = ["6irhhq2vhe5"];
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
  return (
    <div>
      <pre>{JSON.stringify(props.blog)}</pre>
    </div>
  );
};

export default BlogPage;
