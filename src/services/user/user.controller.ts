import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create() {
        return this.userService.create()
    }

    @Get()
    async getAll() {
        return this.userService.getAll()
    }

    @Get("/:id")
    async getById(){
        return this.userService.getById()
    }

    @Put("/:id")
    async update() {
        return this.userService.update()
    }
    @Delete("/:id")
    async delete() {
        return this.userService.delete()
    }

}
