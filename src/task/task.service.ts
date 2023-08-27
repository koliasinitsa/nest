import { Injectable } from "@nestjs/common";
import { Task } from "./task.entity";
import {ITask, Status} from './task.interface';
import { createTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TaskService {
    private tasks: ITask[] = [];
    getTask(): ITask[] {
        return this.tasks;
    }

    getTaskById(id: string): ITask { 
        const task = this.tasks.find((t) => t.id === +id);
        return task;
    }

    createTask( {task, tags, status}:createTaskDto): ITask {
        const newTask = new Task(task, tags, status);
        this.tasks.push(newTask);
        return newTask;
    }
}