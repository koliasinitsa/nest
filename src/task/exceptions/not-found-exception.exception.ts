import { HttpException, HttpStatus } from "@nestjs/common";

interface Error {
    message?: never;
    error?: never;
    createdAt?: never;
    [k: string]: string;
}
export class NotFoundTaskException extends HttpException {
    constructor(error = null) {
        super({
            message: 'Tasks not found',
            error: 'not_foud_task_exception',
            createdAt: new Date(),
            ...error
        },
        HttpStatus.NOT_FOUND,
        )
    }
}