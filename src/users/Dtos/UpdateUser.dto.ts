import { CreateUser } from "./CreateUser.dto";
import { PickType } from "@nestjs/mapped-types";

// export class UpdateUser extends PartialType(CreateUser) {

// }

export class UpdateUser extends PickType(CreateUser, ['email' , 'name'] ) {

}