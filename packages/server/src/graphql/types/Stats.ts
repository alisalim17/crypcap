import { Field, ObjectType } from "type-graphql";

@ObjectType({
  isAbstract: true,
})
export class Stats {
  @Field()
  totalCoins!: number;

  @Field()
  totalMarkets!: number;

  @Field()
  totalExchanges!: number;

  @Field()
  totalMarketCap!: number;
  @Field()
  total24hVolume!: number;
}
