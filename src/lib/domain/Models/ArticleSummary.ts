type Link =
  | {
      type: "internal";
      path: string;
    }
  | {
      type: "external";
      url: string;
    };
export type ArticleSummary = {
  id: string;
  title: string;
  link: Link;
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
