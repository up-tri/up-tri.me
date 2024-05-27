import { ArticleDetail } from "../domain/Models/ArticleDetail";
import { BlogItems } from "../domain/Models/BlogItems";
import {
  blogItemResponseFilter,
  blogListResponseFilter,
} from "../domain/filter/blogResponseFilter";
import { Microcms, microcmsClient } from "../infra/Microcms";

export class BlogRepository {
  private endpoint: string = "blogs";
  constructor(private client: Microcms) {
    //
  }

  public async getThePage(slug: string): Promise<ArticleDetail> {
    return blogItemResponseFilter(await this.client.get(this.endpoint, slug));
  }

  public async getPages({
    limit = 10,
    // FIXME: 汎用的なタクソノミー絞り込みを実装
    categorySlug,
  }: {
    limit?: number;
    categorySlug?: string;
  }): Promise<BlogItems> {
    return blogListResponseFilter(
      await this.client.getList(this.endpoint, categorySlug, limit)
    );
  }

  public async getIds(): Promise<string[]> {
    return await this.client.getIds(this.endpoint);
  }
}

export const blogRepository = new BlogRepository(microcmsClient);
