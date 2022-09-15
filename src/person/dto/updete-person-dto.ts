import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePersonDto  {
  @Field({ nullable: true })
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  country: string;
  @Field({ nullable: true })
  Description: string;
}