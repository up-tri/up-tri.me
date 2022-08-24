const orders = ["-publishedAt", "publishedAt", "-id", "id"] as const;
export type Order = typeof orders[number];
