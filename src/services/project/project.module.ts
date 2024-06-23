import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Project, User} from "../../core/schema";

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [TypeOrmModule.forFeature([Project])]
})
export class ProjectModule {}
