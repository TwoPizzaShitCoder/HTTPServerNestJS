import {IsDefined, IsEmail, IsNotEmpty, IsString, Length} from "class-validator";

export class CreateModel {
    @IsString()
    @IsDefined()
    @Length(1, 20)
    login: string

    @IsString()
    @IsDefined()
    @Length(8, 100)
    password: string
}

export class UpdateModel{
    @IsString()
    @Length(1,20)
    login: string

    @IsString()
    @Length(8, 100)
    password: string
}