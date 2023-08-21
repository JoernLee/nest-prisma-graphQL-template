import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './users.resolver';

@Module({
  controllers: [UsersController],
  providers: [UserResolver, UsersService],
  imports: [PrismaModule],
})
export class UsersModule {}
