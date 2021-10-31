import { Query, Resolver } from "type-graphql";
import { api } from "../../utils/api";
import { Stats } from "../types/Stats";

@Resolver()
export class StatsResolver {
  @Query(() => Stats)
  async stats() {
    const { data } = await api.request({ url: "/stats" });
    return data?.data;
  }
}
