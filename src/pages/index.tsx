import type { NextPage } from "next";
import { PageHeadProps } from "../components/atoms/PageHead";
import { ImageWithCaption } from "../components/molecules/ImageWithCaption";
import { TailwindFooter } from "../components/organisms/TailwindFooter";
import { TailwindTemplate } from "../components/templates/TailwindTemplate";

const HomePage: NextPage = () => {
  const headProps: PageHeadProps = {
    pageType: "top",
    description: "up-tri's homepage.",
    keywords: [],
  };

  return (
    <TailwindTemplate headProps={headProps} footer={<TailwindFooter />}>
      <div className='font-mono'>
        <div className='m-auto max-w-full p-4' style={{ width: "600px" }}>
          <hr className='block h-1 my-5 border-none bg-gray-600' />
          <h1 className='text-bold text-3xl my-5'>up-tri&apos;s profile</h1>
          <p className=''>
            こんにちは、<code className='bg-blue-100 px-1 mx-1'>up-tri</code>
            です。
          </p>
          <p className='mt-3 text-sm'>
            Mail:{" "}
            <a
              id='uptrime__top_headlink_mailto'
              className='underline text-blue-700 hover:text-blue-400'
              href='mailto:yaki-shake@up-tri.me'
            >
              yaki-shake@up-tri.me
            </a>
          </p>
          <hr className='block h-1 my-5 border-none bg-gray-600' />
          <ul className='ml-4' style={{ listStyleType: "square" }}>
            {/* 
            <li className='my-2'>
              <Link href='/blog'>
                <a
                  id='uptrime__top_headlink_blog'
                  className='underline text-lg text-blue-700 hover:text-blue-400'
                >
                  Blog
                </a>
              </Link>
            </li>
            */}
            <li className='my-2'>
              <a
                id='uptrime__top_headlink_github'
                className='underline text-lg text-blue-700 hover:text-blue-400'
                href='https://github.com/up-tri'
              >
                GitHub
              </a>
            </li>
            <li className='my-2'>
              <a
                id='uptrime__top_headlink_qiita'
                className='underline text-lg text-blue-700 hover:text-blue-400'
                href='https://qiita.com/up-tri'
              >
                Qiita
              </a>
            </li>
            <li className='my-2'>
              <a
                id='uptrime__top_headlink_zenndev'
                className='underline text-lg text-blue-700 hover:text-blue-400'
                href='https://zenn.dev/up_tri'
              >
                Zenn.dev
              </a>
            </li>
          </ul>
          <ImageWithCaption
            className='my-5'
            image={{
              src: "https://images.microcms-assets.io/assets/ce193495dc6e4d80b89453771eea746d/d9a4be4437044b26bbad5f24393bbe36/penguin_small.jpeg?w=600",
              alt: "私、ではなくねこぺん",
              className: "block shadow",
            }}
            caption={{
              captionText: "私、ではなくねこぺん",
              className: "text-sm text-gray-400 text-right",
            }}
          />
          <h2 className='text-bold text-2xl mt-5 mb-3 border-b-2 border-gray-300'>
            趣味
          </h2>
          <ul className='ml-4' style={{ listStyleType: "square" }}>
            <li>写真</li>
          </ul>
          <p>
            最近は<code className='bg-blue-100 px-1 mx-1'>FUJIFILM X-Pro2</code>
            を使っています。
          </p>
          <ImageWithCaption
            className='my-5'
            image={{
              src: "https://images.microcms-assets.io/assets/ce193495dc6e4d80b89453771eea746d/f16193248a304e30b189fddf192c07cd/nemophila.jpeg?w=600",
              alt: "ネモフィラ＠日比谷公園",
              className: "block shadow",
            }}
            caption={{
              captionText: "ネモフィラ＠日比谷公園",
              className: "text-sm text-gray-400 text-right",
            }}
          />
          <h2 className='text-bold text-2xl mt-5 mb-3 border-b-2 border-gray-300'>
            いろいろな経歴
          </h2>
          <ul className='ml-4' style={{ listStyleType: "none" }}>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2015年4月〜2019年3月
              </h3>
              <p>大学で情報工学を専攻</p>
              <p>卒業時はグラフ理論を研究</p>
            </li>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2015年夏〜2020年5月
              </h3>
              <p>
                Webメディアを運営するベンチャー企業にWebエンジニアとして参画
              </p>
              <p>メディアプラットフォームの開発運用などに従事</p>
            </li>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2016年10月〜2019年3月
              </h3>
              <p>
                武蔵野市事業{" "}
                <a
                  id='uptrime__top_history_musashino'
                  className='underline text-blue-700 hover:text-blue-400'
                  href='http://www.city.musashino.lg.jp/kurashi_guide/shisetsu_jigyo/1019662.html'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  中高生世代広場
                </a>
                に、大学生ファシリテーターとして立ち上げから参画
              </p>
            </li>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2018年夏
              </h3>
              <p>
                <a
                  id='uptrime__top_history_hakumonsai'
                  className='underline text-blue-700 hover:text-blue-400'
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://hakumonsai.com/'
                >
                  大学祭
                </a>{" "}
                にて、オンライン投票の不正防止を監修
              </p>
            </li>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2018年8月〜2020年春
              </h3>
              <p>
                <a
                  id='uptrime__top_history_ttmusashino'
                  className='underline text-blue-700 hover:text-blue-400'
                  href='http://teens-town.main.jp'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  TeensTownむさしの
                </a>
                に参画
              </p>
            </li>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2019年8月〜2021年3月
              </h3>
              <p>旅行系スタートアップ企業にエンジニアとして参画</p>
            </li>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2021年4月〜現在
              </h3>
              <p>IT企業でECシステムの検索バックエンド部門に所属</p>
              <p>→2023年度から検索面フロントエンドチームのEMに。</p>
            </li>
            <li className='mb-3'>
              <h3 className='p-1 text-bold text-lg bg-green-600 text-white'>
                2022年4月〜現在
              </h3>
              <p>
                プロボノとして
                <a
                  id='uptrime__top_history_senkyowari'
                  className='underline text-blue-700 hover:text-blue-400'
                  href='https://senkyowari.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  (一社)選挙割協会
                </a>
                へ参画
              </p>
            </li>
          </ul>
          <h2 className='text-bold text-2xl mt-5 mb-3 border-b-2 border-gray-300'>
            もろもろの経験
          </h2>
          <ul className='ml-4' style={{ listStyleType: "square" }}>
            <li>
              frontend
              <ul className='ml-4' style={{ listStyleType: "disc" }}>
                <li>
                  JS
                  <br />
                  TypeScript, React/Nextjs, Vue(v2), Electron,{" "}
                  <a
                    id='uptrime__top_history_ionic'
                    className='underline text-blue-700 hover:text-blue-400'
                    href='https://ionicframework.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Ionic/Capacitor
                  </a>
                </li>
              </ul>
            </li>
            <li>
              backend
              <ul className='ml-4' style={{ listStyleType: "disc" }}>
                <li>java(Spring), go, python</li>
                <li>
                  php
                  <br />
                  laravel
                </li>
                <li>
                  Ruby
                  <br />
                  Rails, itamae, capistrano
                  <br />
                  <span className='text-xs'>
                    (最近はあまり触っていないです)
                  </span>
                </li>
              </ul>
            </li>
            <li>
              infra・middleware
              <ul className='ml-4' style={{ listStyleType: "disc" }}>
                <li>
                  AWS
                  <br />
                  EC2, ALB, ...
                </li>
                <li>
                  GCP
                  <br />
                  GCE, GAE, GKE, ...
                </li>
                <li>
                  middleware
                  <br />
                  ・Docker
                  <br />
                  ・Kubernetes
                  <br />
                  ・Prometheus/Grafana
                  <br />
                  ・nginx, Apache-webserver
                  <br />
                  ・MySQL
                </li>
              </ul>
            </li>
            <li>
              その他
              <ul className='ml-4' style={{ listStyleType: "disc" }}>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop/Lightroom</li>
                <li>Adobe XD</li>
                <li>Adobe InDesign</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </TailwindTemplate>
  );
};

export default HomePage;
