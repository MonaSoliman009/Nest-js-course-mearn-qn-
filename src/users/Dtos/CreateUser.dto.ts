import {IsEmail, IsNotEmpty, IsOptional, IsString, Length} from "class-validator"
export class CreateUser{

    @IsString()
    @IsNotEmpty()
    @Length(3,20,{message:"name must be between 3 and 20 characters"})
    name:string;

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    password:string;

    @IsString()
    @IsOptional()	
    id?:string;
}