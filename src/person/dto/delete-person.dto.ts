import { InputType, Field} from '@nestjs/graphql';
//I didn't use this dto yet i think  it has no use in this code
@InputType()
export class DeletePersonDto  {
  @Field()
  _id: String;
 
}