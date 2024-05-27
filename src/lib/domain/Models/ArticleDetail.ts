export type ArticleDetail = {
  id: string;
  title: string;
  link: {
    type: "internal";
    path: string;
  };
  publishedAt: {
    display: string;
    iso: string;
  };
  updatedAt: {
    display: string;
    iso: string;
  } | null;
  thumbnail: { url: string; caption: string };
  content: string;
  category: { id: string; label: string } | null;
};
