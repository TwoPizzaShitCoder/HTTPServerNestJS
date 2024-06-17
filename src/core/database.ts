import {DataSource} from "typeorm"
import {Block, Project, Task, User} from "./schema";

export const AppDataSource = new DataSource({
    type: "postgres",
    username: "postgres",
    password: "postgres",
    database: "NestToDoList",
    host:"127.0.0.1",
    port: 5432,
    synchronize: true,
    logging: "all",
    // dropSchema: true,
    entities: [User, Project, Block, Task]
})