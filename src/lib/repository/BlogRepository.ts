import { Blog } from "../domain/Models/Blog";
import { ListBase } from "../domain/Types/ListBase";
import { Microcms, microcmsClient } from "../infra/Microcms";

export class BlogRepository {
  private endpoint: string = "blogs";
  constructor(private client: Microcms) {
    //
  }

  public async getThePage(slug: string): Promise<Blog> {
    return await this.client.get(this.endpoint, slug);
  }

  public async getPages(): Promise<ListBase<Blog>> {
    return await this.client.getList(this.endpoint);
  }

  public async getIds(): Promise<string[]> {
    return await this.client.getIds(this.endpoint);
  }
}

export const blogRepository = new BlogRepository(microcmsClient);
