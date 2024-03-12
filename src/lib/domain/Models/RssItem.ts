export type RssItem = {
  guid: string;
  title: string;
  link: string;
  publishedAt: {
    display: string;
    iso: string;
  } | null;
  thumbnail: { url: string; caption: string };
  content: string;

  // note: 以下はzenn.devでちゃんと返ってくるが、参照しないので実装もしないでおく。
  // contentSnippet: string;
  // pubDate: string;
};
