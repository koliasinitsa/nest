import { IsString, IsOptional, IsEnum, IsNotEmpty, ArrayNotEmpty } from "class-validator";
import { Status } from "../task.interface";

export class createTaskDto {
    @IsString({message: 'name Necessarily'})
    @IsNotEmpty({message: 'name Necessarily'})
    task: string;

    @ArrayNotEmpty({message: 'tags not empty'})
    @IsString({each: true,  message: 'tags must be lowercase.'})
    tags?: string[];

    @IsOptional()
    @IsEnum(Status,  {message: 'invalid status type'})
    status?:Status;
}