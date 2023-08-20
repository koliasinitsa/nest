import { Body, Controller, Get, HttpCode, Param, Redirect, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";


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

    @Post()
    createTask(@Body('task') task: string): ITask {
        return this.taskService.createTask(task);
    }

    @Put()
    putTask(@Body('task') task: string): ITask {
        return this.taskService.createTask(task);
    }
}

