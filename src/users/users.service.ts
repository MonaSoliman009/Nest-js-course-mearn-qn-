import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUser } from "./Dtos/CreateUser.dto";
import { v4 as uuid } from "uuid";
import { UpdateUser } from "./Dtos/UpdateUser.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  private users: CreateUser[] = [];

  async findAll(): Promise<CreateUser[]> {
    return await this.userModel.find();
  }

  async findOne(id): Promise<CreateUser> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException("User Not Found");
    }

    return user;
  }

  async createUser(user: CreateUser): Promise<CreateUser> {
  return await this.userModel.create(user)
  }

 async updateById(user: UpdateUser, id: string):Promise<CreateUser> {
 return  await this.userModel.findByIdAndUpdate(id,user,{new:true})
  }

  async deleteById(id: string):Promise<void>  {

   await this.userModel.findByIdAndDelete(id)
  }
}
