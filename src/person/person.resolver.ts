import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Employee } from './person.shcema';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/updete-person-dto';

@Resolver()
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query((returns) => [Employee])
  async getAllPerson() {
    return await this.personService.findAll();
  }

  @Query((returns) => Employee)
  async getPersonById(@Args('_id') _id: string) {
    return await this.personService.getPersonById(_id);
  }

  @Mutation((returns) => Employee)
  async updatePerson(
    @Args('_id') _id: string,
    @Args('updatePersonDto') updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.update(_id, updatePersonDto);
  }

  @Mutation((returns) => Employee)
  async deletePerson(@Args('_id') _id: string) {
    return this.personService.delete(_id);
  }
  @Mutation(() => Employee)
  addPerson(@Args('createPersonDto') createPersonDto: CreatePersonDto) {
    return this.personService.addPerson(createPersonDto);
  }
}
