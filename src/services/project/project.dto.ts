import {IsDefined, IsString, Length} from "class-validator";

export class CreateModel{
    @IsString()
    @IsDefined()
    @Length(1, 50)
    title: string

    @IsString()
    @Length(0, 1000)
    description: string
}