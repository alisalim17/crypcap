import { Field, ObjectType, GraphQLISODateTime } from "type-graphql";

@ObjectType()
export class CoinHistory {
  @Field()
  price!: string;
  @Field()
  timestamp!: number;
}
