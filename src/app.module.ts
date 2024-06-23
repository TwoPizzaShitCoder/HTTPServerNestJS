import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './services/user/user.module';
import {TaskModule} from './services/task/task.module';
import {ProjectModule} from './services/project/project.module';
import {BlockModule} from './services/block/block.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Block, Project, Task, User} from "./core/schema";
import {DataSource} from "typeorm";
import {AuthModule} from "./services/auth/auth.module";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: "postgres",
                username: "postgres",
                password: "postgres",
                database: "NestToDoList",
                host: "127.0.0.1",
                port: 5432,
                synchronize: true,
                logging: "all",
                dropSchema: true,
                entities: [User, Project, Block, Task]
            })
        }),
        UserModule,
        TaskModule,
        ProjectModule,
        BlockModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {
    }
}

