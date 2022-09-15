import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePersonDto {
  @Field({ nullable: true })
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  country: string;
  @Field({ nullable: true })
  Description: string;
}