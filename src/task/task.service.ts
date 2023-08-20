import { Injectable } from "@nestjs/common";
import { Task } from "./task.entity";
//import { ITask } from "./task.interface";

@Injectable()
export class TaskService {
    private tasks: ITask[] = [
        {id: 1, task: 'task1'},
        {id: 2, task: 'task2'},
    ];

    getTask(): ITask[] {
        return this.tasks;
    }

    getTaskById(id: string): ITask { 
        const task = this.tasks.find((t) => t.id === +id);
        return task;
    }

    createTask( task: string): ITask {
        const newTask = new Task(task);
        this.tasks.push(newTask);
        return newTask;
    }
}