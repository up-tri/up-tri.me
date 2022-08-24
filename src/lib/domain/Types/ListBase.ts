export type ListBase<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
