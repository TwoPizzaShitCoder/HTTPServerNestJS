import {Body, Controller, Post} from '@nestjs/common';
import {CreateModel} from "./project.dto";

@Controller('project')
export class ProjectController {
    constructor() {
    }

    @Post()
    async create(@Body() data: CreateModel){

    }
}
