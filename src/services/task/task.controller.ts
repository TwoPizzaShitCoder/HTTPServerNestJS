import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import {TaskService} from "./task.service";

@Controller('/tasks')
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Post()
    async create() {
        return this.taskService.create()
    }

    @Get()
    async getAll() {
        return this.taskService.getAll()
    }

    @Get("/:id")
    async getById(){
        return this.taskService.getById()
    }

    @Put("/:id")
    async update() {
        return this.taskService.update()
    }
    @Delete("/:id")
    async delete() {
        return this.taskService.delete()
    }

}
