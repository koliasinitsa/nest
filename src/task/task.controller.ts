import { Body, Controller, Get, Param, ParseIntPipe, Post, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import {ITask, Status} from './task.interface';
import { createTaskDto } from "./dto/create-task.dto";
import { AllExceptionsFIlter } from "@src/exception-filters/exception.filter";
import { EmailPipe } from "./pipes/email.pipe";

//@UseFilters(AllExceptionsFIlter)
@Controller('task')
export class TaskController {
 
    constructor(
        private taskService: TaskService
    ){}

    @Get()
    getTest(): ITask[] {
        return this.taskService.getTask();
    }

    @Get(':id')
    getTaskById(@Param('id', ParseIntPipe) id: string): ITask { 
        return this.taskService.getTaskById(id);
    }

    @UsePipes(new ValidationPipe())
    @Post()
    createTask(@Body() task: createTaskDto): ITask {
        return this.taskService.createTask(task);
    }
    
    @Get('email/:email')
    getTasksByEmail(@Param('email', EmailPipe) email: string): ITask[] {
        return this.taskService.getTasksByEmail(email);
    }

}