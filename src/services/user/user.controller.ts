import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateModel, UpdateModel} from "./user.dto";

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post()
    async create(@Body() data: CreateModel) {
        return await this.userService.create(data)
    }

    @Get()
    async getAll() {
        return await this.userService.getAll()
    }

    @Get("/:id")
    async getById(@Param('id') id: number) {
        return await this.userService.getById(id)
    }

    @Put("/:id")
    async update(@Param("id") id: number, @Body() data: UpdateModel) {
        return await this.userService.update(id, data)
    }

    @Delete("/:id")
    async delete(@Param("id") id: number) {
        return await this.userService.delete(id)
    }

}
