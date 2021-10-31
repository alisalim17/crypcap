import { InputType, Field } from "type-graphql";
import { registerEnumType } from "type-graphql";

enum TimePeriod {
  a,
  b,
  c,
  ali,
  all,
}

registerEnumType(TimePeriod, {
  name: "Direction", // this one is mandatory
  description: "The basic directions", // this one is optional
});

@InputType()
export class CoinHistoryInput {
  @Field(() => TimePeriod) //
  timePeriod: TimePeriod;
}
