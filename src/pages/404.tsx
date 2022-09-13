import type { NextPage } from "next";
import Link from "next/link";
import { PageHeadProps } from "../components/atoms/PageHead";
import { TailwindFooter } from "../components/organisms/TailwindFooter";
import { TailwindTemplate } from "../components/templates/TailwindTemplate";

const NotFoundPage: NextPage = () => {
  const headProps: PageHeadProps = {
    pageType: "others",
    title: "404 - up-tri",
    description: "",
    keywords: [],
  };

  return (
    <TailwindTemplate headProps={headProps} footer={<TailwindFooter />}>
      <div className='font-mono'>
        <div className='m-auto max-w-full p-4' style={{ width: "600px" }}>
          <hr className='block h-1 my-5 border-none bg-gray-600' />
          <h1 className='text-bold text-xl my-5'>404 Not Found.</h1>
          <p className=''>コンテンツが存在しません。</p>
          <hr className='block h-1 my-5 border-none bg-gray-600' />
          <div className='text-center'>
            <Link
              id='uptrime__404_returnhome_0'
              href='/'
              className='inline-block border border-blue-700 px-8 py-5 bg-white text-blue-700 shadow-md transition-all duration-75 hover:bg-blue-700 hover:text-white'
            >
              ❯ return to home
            </Link>
          </div>
          {/*
          <div className='mt-3 text-center'>
            <a
              id='uptrime__404_goblog_0'
              href='https://blog.up-tri.me'
              className='inline-block border border-green-700 px-8 py-5 bg-white text-green-700 shadow-md transition-all duration-75 hover:bg-green-700 hover:text-white'
            >
              ❯ Blogはこちら
            </a>
          </div>
          */}
        </div>
      </div>
    </TailwindTemplate>
  );
};

export default NotFoundPage;
