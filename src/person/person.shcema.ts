import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field(type => Int ,{nullable:true})
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  country: string;
  @Field({ nullable: true })
  Description: string;
}