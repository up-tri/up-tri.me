import classNames from "classnames";
import type { NextPage } from "next";
import { LevelTile } from "../components/atoms/LevelTile";
import { PageHeadProps } from "../components/atoms/PageHead";
import { ImageWithCaption } from "../components/molecules/ImageWithCaption";
import { PageFooterProps } from "../components/organisms/PageFooter";
import { PageHeaderProps } from "../components/organisms/PageHeader";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import { skills } from "../lib/profile/skills";
import style from "./index.module.scss";

const HomePage: NextPage = () => {
  const headProps: PageHeadProps = {
    pageType: "top",
    description: "up-tri's homepage.",
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
      <div className={style.IndexPageSection}>
        <h1 className={style.IndexPageTitle}>up-tri&apos;s profile</h1>
        <p className={style.IndexPageTitleCaption}>こんにちは、up-triです。</p>
        {/* <p className={style.IndexPageTitleCaption}>
          <i
            className={classNames(
              "fa-sharp",
              "fa-solid",
              "fa-envelope",
              style.IndexPageTitleCaptionIcon
            )}
          ></i>
          <a
            id="uptrime__top_headlink_mailto"
            className={style.IndexPageTitleCaptionLink}
            href="mailto:yaki-shake@up-tri.me"
          >
            yaki-shake@up-tri.me
          </a>
        </p> */}
      </div>
      <div className={style.IndexPageSection}>
        <div className={style.IndexPageProfileCard}>
          <img
            src="https://images.microcms-assets.io/assets/ce193495dc6e4d80b89453771eea746d/d9a4be4437044b26bbad5f24393bbe36/penguin_small.jpeg?w=600"
            alt="私、ではなくねこぺん"
            className={style.IndexPageProfileCard__image}
          />
          <div className={style.IndexPageProfileCard__body}>
            <ul className={style.IndexPageProfileLinks}>
              {/* <li className={style.IndexPageProfileLinks__item}>
                <i
                  className={classNames(
                    "fa-solid",
                    "fa-browser",
                    style.IndexPageProfileLinks__icon
                  )}
                />
                <a
                  id="uptrime__top_headlink_blog"
                  className={style.IndexPageProfileLinks__link}
                  rel="noopener noreferrer"
                  href="/blog"
                >
                  Blog
                </a>
              </li> */}
              <li className={style.IndexPageProfileLinks__item}>
                <i
                  className={classNames(
                    "fa-brands",
                    "fa-github",
                    style.IndexPageProfileLinks__icon
                  )}
                />
                <a
                  id="uptrime__top_headlink_github"
                  className={style.IndexPageProfileLinks__link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/up-tri"
                >
                  GitHub
                </a>
              </li>
              <li className={style.IndexPageProfileLinks__item}>
                <i
                  className={classNames(
                    "fa-solid",
                    "fa-note",
                    style.IndexPageProfileLinks__icon
                  )}
                />
                <a
                  id="uptrime__top_headlink_zenndev"
                  className={style.IndexPageProfileLinks__link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://zenn.dev/up_tri"
                >
                  Zenn.dev
                </a>
              </li>
              <li className={style.IndexPageProfileLinks__item}>
                <i
                  className={classNames(
                    "fa-solid",
                    "fa-note",
                    style.IndexPageProfileLinks__icon
                  )}
                />
                <a
                  id="uptrime__top_headlink_qiita"
                  className={style.IndexPageProfileLinks__link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://qiita.com/up-tri"
                >
                  Qiita
                </a>
              </li>
              <hr className={style.IndexPageProfileLinks__divider} />
              <li className={style.IndexPageProfileLinks__item}>
                <i
                  className={classNames(
                    "fa-sharp",
                    "fa-solid",
                    "fa-envelope",
                    style.IndexPageProfileLinks__icon
                  )}
                />
                <span className={style.IndexPageProfileLinks__nolink}>
                  yaki-shake@up-tri.me
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.IndexPageSection}>
        <h2 className={style.IndexPageSectionTitle}>趣味</h2>
        <p className={style.IndexPageSectionSubTitle}>写真</p>
        <p className={style.IndexPageBaseText}>
          最近は
          <code className="g--code">FUJIFILM X-Pro2</code>
          を使っています。
        </p>
        <div className={style.IndexPageImagesCarousel}>
          <ImageWithCaption
            className={style.IndexPageImagesCarousel__item}
            image={{
              src: "https://images.microcms-assets.io/assets/ce193495dc6e4d80b89453771eea746d/dc26489bb0024ff4990047dbe9219544/2023-kyoto-autumn.jpg?w=1000",
              alt: "京都の紅葉 2023年バージョン",
              className: style.IndexPageImage,
            }}
            caption={{
              captionText: "京都の紅葉 2023年バージョン",
              className: style.IndexPageImageCaption,
            }}
          />
        </div>
      </div>
      <div className={style.IndexPageSection}>
        <h2 className={style.IndexPageSectionTitle}>いろいろな経歴</h2>
        <ul className={style.IndexPageJobHistories}>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--college"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>
              2015年4月〜2019年3月
            </h3>
            <p className={style.IndexPageJobHistories__text}>
              大学で情報工学を専攻
            </p>
            <p className={style.IndexPageJobHistories__text}>
              グラフ理論に関する研究
            </p>
          </li>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--job"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>
              2015年夏〜2020年5月
            </h3>
            <p className={style.IndexPageJobHistories__text}>
              Webメディアを運営するベンチャー企業にWebエンジニアとして参画
            </p>
            <p className={style.IndexPageJobHistories__text}>
              メディアプラットフォーム（入稿・記事表示）の開発運用や、ローカル情報発信アプリ（iOS）開発などに従事
            </p>
          </li>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--volunteer"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>
              2016年10月〜2019年3月
            </h3>
            <p className={style.IndexPageJobHistories__text}>
              武蔵野市事業
              <a
                id="uptrime__top_history_musashino"
                className={style.IndexPageJobHistories__textLink}
                href="http://www.city.musashino.lg.jp/kurashi_guide/shisetsu_jigyo/1019662.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                中高生世代広場
              </a>
              に、大学生ファシリテーターとして立ち上げから参画
            </p>
          </li>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--college"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>2018年夏</h3>
            <p className={style.IndexPageJobHistories__text}>
              大学祭にて、オンライン投票の不正防止を監修
            </p>
          </li>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--volunteer"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>
              2018年8月〜2020年春
            </h3>
            <p className={style.IndexPageJobHistories__text}>
              <a
                id="uptrime__top_history_ttmusashino"
                className={style.IndexPageJobHistories__textLink}
                href="http://teens-town.main.jp"
                rel="noopener noreferrer"
                target="_blank"
              >
                TeensTownむさしの
              </a>
              に参画
            </p>
          </li>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--job"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>
              2019年8月〜2021年3月
            </h3>
            <p className={style.IndexPageJobHistories__text}>
              旅行系スタートアップ企業にエンジニアとして参画
            </p>
          </li>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--job"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>
              2021年4月〜現在
            </h3>
            <p className={style.IndexPageJobHistories__text}>
              IT企業でモールECシステムの検索部門に所属し、バックエンド領域・フロントエンド領域の開発に従事
            </p>
            <p className={style.IndexPageJobHistories__text}>
              2023年度からはwebフロントエンドチームのマネージャーとして活動
            </p>
          </li>
          <li
            className={classNames(
              style.IndexPageJobHistories__item,
              style["IndexPageJobHistories__item--volunteer"]
            )}
          >
            <h3 className={style.IndexPageJobHistories__title}>
              2022年4月〜現在
            </h3>
            <p className={style.IndexPageJobHistories__text}>
              プロボノとして
              <a
                id="uptrime__top_history_senkyowari"
                className={style.IndexPageJobHistories__textLink}
                href="https://senkyowari.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                (一社)選挙割協会
              </a>
              へ参画
            </p>
          </li>
        </ul>
      </div>
      <div className={style.IndexPageSection}>
        <h2 className={style.IndexPageSectionTitle}>スキルマップ</h2>
        <div className={style.IndexPageSkills}>
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={classNames({
                [style.IndexPageSkills__item]: true,
                [style["IndexPageSkills__item--large"]]: skill.size === "large",
              })}
            >
              <div
                className={classNames(
                  style.IndexPageProfileCard,
                  style["IndexPageProfileCard--column"],
                  style["IndexPageProfileCard--fill"]
                )}
              >
                <div className={style.IndexPageProfileCard__body}>
                  <p className={style.SkillLabel}>
                    {skill.icon && <skill.icon className={style.SkillIcon} />}
                    {skill.label}
                  </p>
                  <div className={style.SkillLevel}>
                    <span>Lv.{skill.level}</span>
                    <LevelTile inline level={skill.level} />
                  </div>
                  {skill.frameworks.length > 0 && (
                    <div className={style.SkillFrameworks}>
                      {skill.frameworks.map((framework, idx) => (
                        <p className={style.SkillFrameworks__item} key={idx}>
                          <i
                            className={classNames(
                              "fa-solid fa-tag",
                              style.SkillFrameworks__tagIcon
                            )}
                          />
                          {framework.label}
                        </p>
                      ))}
                    </div>
                  )}
                  <p className={style.SkillDescription}>
                    経験年数:{" "}
                    {skill.using === 0 ? "少し" : `約${skill.using}年`}
                  </p>
                  {skill.description.map((t, idx) => (
                    <p key={idx} className={style.SkillDescription}>
                      {t}
                    </p>
                  ))}
                </div>
                <div className={style.IndexPageProfileCard__footer}>
                  <span
                    className={classNames(
                      style.SkillCategoryLabel,
                      style[
                        `SkillCategoryLabel--${skill.category.cssClassSuffix}`
                      ]
                    )}
                  >
                    {skill.category.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default HomePage;
