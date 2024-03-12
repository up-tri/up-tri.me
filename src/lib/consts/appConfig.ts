import dayjs from "dayjs";

const currentYear = dayjs().year();

const _siteProtocol = process.env.SITE_PROTOCOL ?? "https";
const _siteHost = process.env.SITE_HOSTNAME ?? "";

export const appConfig = {
  siteImage: {
    url: "https://images.microcms-assets.io/assets/ce193495dc6e4d80b89453771eea746d/d9a4be4437044b26bbad5f24393bbe36/penguin_small.jpeg?w=500&h=500",
    width: 500,
    height: 500,
  },
  siteProtocol: _siteProtocol,
  siteHost: _siteHost,
  siteName: "up-tri's website",
  nodeEnv: process.env.NODE_ENV,
  currentYear,
  copyright: `&copy; 2017 - ${currentYear} up-tri.`,

  rssFeed: {
    zenn: {
      userSlug: "up_tri",
    },
  },
  dayjsDateFormat: {
    display: "YYYY年MM月DD日",
  },
  assets: {
    noImage: {
      url: `${_siteProtocol}://${_siteHost}/images/1200x630.png`,
      caption: "no image",
    },
  },
};
