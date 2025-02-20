import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
 
    @Prop({required:true,unique:true})
    name:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;


}

export const usersSchema=SchemaFactory.createForClass(User)