import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import {ITask, Status} from './task.interface';
import { createTaskDto } from "./dto/create-task.dto";

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
    getTaskById(@Param('id') id: string): ITask { 
        return this.taskService.getTaskById(id);
    }

    @UsePipes(new ValidationPipe())
    @Post()
    createTask(@Body() task: createTaskDto): ITask {
        return this.taskService.createTask(task);
    }
}

