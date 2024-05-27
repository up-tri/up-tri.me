import { createClient } from "microcms-js-sdk";
import { apiEnv } from "../consts/apiEnv";
import { Order } from "../consts/orders";
import { ResponseItem, ResponseItems } from "../domain/Types/ResponseItem";

export class Microcms {
  private client: ReturnType<typeof createClient>;
  constructor() {
    this.client = createClient({
      serviceDomain: apiEnv.serviceDomain,
      apiKey: apiEnv.apiKey,
    });
  }

  public get(
    endpoint: string,
    contentId: string,
    draftKey?: string
  ): Promise<ResponseItem> {
    const queries = draftKey ? { draftKey } : undefined;
    return this.client.get({ endpoint, contentId, queries });
  }

  public getList(
    endpoint: string,
    // FIXME: 汎用的なタクソノミー絞り込みを実装
    categorySlug?: string,
    limit: number = 10,
    offset: number = 0,
    orders: Order = "id"
  ): Promise<ResponseItems> {
    return this.client.getList({
      endpoint,
      queries: { limit, offset, orders },
    });
  }

  public getIds(endpoint: string) {
    return this.client.getAllContentIds({
      endpoint,
    });
  }
}

export const microcmsClient = new Microcms();
