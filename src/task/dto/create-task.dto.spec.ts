import { plainToInstance } from "class-transformer";
import { createTaskDto } from "./create-task.dto";
import { validate } from "class-validator";


describe('create-task.dto', ()=> {
    let dto;
    beforeAll(() => {
        dto = {
            task: '',
            tags: [],
            status: ''
        }
    });
    it('task empty', async () => {
        const ofImportDto = plainToInstance(createTaskDto, dto);
        const errors = await validate(ofImportDto);
        expect(errors.map(err => err.property).includes('task')).toBeTruthy()
    })
    it('task not empty', async () => {
        dto.task = 'task kakaya-to'
        const ofImportDto = plainToInstance(createTaskDto, dto);
        const errors = await validate(ofImportDto);
        expect(errors.map(err => err.property).includes('task')).toBeFalsy()
    })

    it('tags empty', async () => {
        const ofImportDto = plainToInstance(createTaskDto, dto);
        const errors = await validate(ofImportDto);
        expect(errors.map(err => err.property).includes('tags')).toBeTruthy()
        expect(dto.tags.length).toBe(0);
    })
    it('each element is a string', async () => {
        dto.tags = ['fdsfsdfsdf', 1]
        const ofImportDto = plainToInstance(createTaskDto, dto);
        const errors = await validate(ofImportDto);
        expect(errors.map(err => err.property).includes('tags')).toBeTruthy()
        expect(dto.tags.length).not.toBe(0);
        expect(dto.tags.every((el) => typeof el === 'string')).not.toBeTruthy();
    })

    it('each element is not a string', async () => {
        dto.tags = ['fdsfsdfsdf', '1']
        const ofImportDto = plainToInstance(createTaskDto, dto);
        const errors = await validate(ofImportDto);
        expect(errors.map(err => err.property).includes('tags')).toBeTruthy()
        expect(dto.tags.length).not.toBe(0);
        expect(dto.tags.every((el) => typeof el === 'string')).not.toBeTruthy();
    })

    
    it('type status - enum status', async () => {
        dto.tags = ['fdsfsdfsdf', '1']
        const ofImportDto = plainToInstance(createTaskDto, dto);
        const errors = await validate(ofImportDto);
        expect(errors.map(err => err.property).includes('status')).toBeTruthy()
    })

    
})