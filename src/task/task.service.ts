import { BadRequestException, Injectable } from "@nestjs/common";
import { Task } from "./task.entity";
import {ITask, Status} from './task.interface';
import { createTaskDto } from "./dto/create-task.dto";
import { NotFoundTaskException } from "./exceptions/not-found-exception.exception";

@Injectable()
export class TaskService {
    private tasks: ITask[] = [];
    getTask(): ITask[] {
        return this.tasks;
    }

    getTaskById(id: string): ITask { 
        const task = this.tasks.find((t) => t.id === +id);
        if (!task) {
            throw new NotFoundTaskException({code: 'error'});
        }
        return task;
    }

    createTask( {task, email, tags, status}:createTaskDto): ITask {
        const newTask = new Task(task,email, tags, status);
        this.tasks.push(newTask);
        return newTask;
    }

    getTasksByEmail(email: string): ITask[] {
        const tasks = this.tasks.filter((t) => t.email === email);
        if (!tasks || tasks.length === 0) {
            throw new BadRequestException('tasks not found')
        }
        return tasks;
    }
}