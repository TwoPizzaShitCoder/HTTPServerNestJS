import {IsDefined, IsString, Length} from "class-validator";

export class AuthDataModel{
    @IsDefined()
    @IsString()
    @Length(1, 20)
    login: string

    @IsString()
    @IsDefined()
    @Length(8, 100)
    password: string


}