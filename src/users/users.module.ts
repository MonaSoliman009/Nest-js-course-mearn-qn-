import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, usersSchema } from './schemas/users.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name, schema:usersSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
