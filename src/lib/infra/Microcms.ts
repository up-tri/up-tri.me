import { createClient } from "microcms-js-sdk";
import { apiEnv } from "../consts/apiEnv";
import { Order } from "../consts/orders";

export class Microcms {
  private client: ReturnType<typeof createClient>;
  constructor() {
    this.client = createClient({
      serviceDomain: apiEnv.serviceDomain,
      apiKey: apiEnv.apiKey,
    });
  }

  public get(endpoint: string, contentId: string, draftKey?: string) {
    const queries = draftKey ? { draftKey } : undefined;
    return this.client.get({ endpoint, contentId, queries });
  }

  public getList(
    endpoint: string,
    limit: number = 10,
    offset: number = 0,
    orders: Order = "id"
  ) {
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
