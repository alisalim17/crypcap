import { Field, ObjectType } from "type-graphql";

@ObjectType()
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
