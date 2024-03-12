/**
 * ランタイムに閉じ込めておく環境変数
 */
export const apiEnv = {
  serviceDomain: process.env.MICROCMS_API_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
};
