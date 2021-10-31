import { ObjectType, Query, Resolver } from "type-graphql";
import { api } from "../../utils/api";
import { CoinHistory } from "../types/CoinHistory";

@ObjectType()
@Resolver()
export class CoinHistoryResolver {
  @Query(() => [CoinHistory])
  async coinHistory(): Promise<CoinHistory[]> {
    const { data } = await api.request({
      url: `/coin/1/history/7d`,
    });

    return data?.data?.history;
  }
}
