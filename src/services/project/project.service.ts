import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Project, User} from "../../core/schema";
import {Repository} from "typeorm";
import {CreateModel} from "./project.dto";

@Injectable()
export class ProjectService {
    constructor(@InjectRepository(Project)
                private repository: Repository<Project>) {
    }

    async create(user_id: number, data: CreateModel){

    }
}

