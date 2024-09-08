/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { CreateUser } from "./Dtos/CreateUser.dto";
import { UpdateUser } from "./Dtos/UpdateUser.dto";
import { UuidPipe } from "src/pipes/uuid/uuid.pipe";
import { UsersService } from "./users.service";
import { ConfigService } from "@nestjs/config";
@Controller("users")
// @UsePipes(new ValidationPipe())
export class UsersController {
  // eslint-disable-next-line prettier/prettier

  constructor(private _UsersService: UsersService,
    private _ConfigService:ConfigService) {}

  private users: CreateUser[] = [];

  @Get()
  findAll(@Req() req, @Query() query): Promise<CreateUser[]> {
    console.log(this._ConfigService.get("TEST"));
    
    return this._UsersService.findAll();
  }

  @Get(":id")
  // findOne(@Param("id", UuidPipe) id): Promise<CreateUser> {

  findOne(@Param("id") id): Promise<CreateUser> {
    return this._UsersService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  addUser(@Body() user: CreateUser): Promise<CreateUser> {
    return this._UsersService.createUser(user);
  }

  @Patch(":id")
  updateUser(
    @Param() { id }: any,
    @Body() userData: UpdateUser,
  ): Promise<CreateUser> | string {
    return this._UsersService.updateById(userData, id);
  }

  @Delete(":id")
  @HttpCode(204)
  deleteUser(@Param("id") id): void {
    this._UsersService.deleteById(id);
  }
}
