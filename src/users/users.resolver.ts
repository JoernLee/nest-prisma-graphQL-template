import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../@generated/user/user.model';
import { UsersService } from './users.service';
import { UserCreateInput } from '../@generated/user/user-create.input';

@Resolver()
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { nullable: true })
  async userList(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Mutation(() => User, { nullable: true, name: 'create' })
  async create(@Args('args') args: UserCreateInput): Promise<any> {
    return await this.usersService.create(args);
  }

  @Mutation(() => User, { nullable: true, name: 'update' })
  async update(
    @Args('id') id: number,
    @Args('name') name: string,
    @Args('email') email: string,
  ): Promise<any> {
    return await this.usersService.update(id, { name, email });
  }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World';
  }
}
