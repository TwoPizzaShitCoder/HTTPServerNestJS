import {HttpException, Injectable} from '@nestjs/common';
import {User} from "../../core/schema";
import {CreateModel, UpdateModel} from "./user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {EntityNotFoundError, QueryFailedError, Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>
    ) {
    }

    async create(data: CreateModel) {
        try {
            let result = await this.repository.save(data);
            delete result.password
            return result
        } catch (e) {
            if (e instanceof QueryFailedError)
                throw new HttpException(
                    `пользователь ${data.login} уже зарегистрирован`,
                    400)
        }
    }

    async getAll() {
        return await this.repository.find({
            select: ["id", "login", "created_at"]
        });
    }

    async getById(id: number) {
        try {
            return await this.repository.findOneByOrFail({id});
        } catch (e) {
            if (e instanceof EntityNotFoundError)
                throw new HttpException("пользователь не найден", 404)
        }
    }

    async getAuthDataByLogin(login: string) {
        try {
            return await this.repository.findOneOrFail(
                {
                    select: ["id", "login", "password"],
                    where: {login: login}
                }
            )
        } catch (e) {
            if (e instanceof EntityNotFoundError)
                throw new HttpException("неверное имя пользователя или пароль", 404)
        }
    }

    async update(id: number, data: UpdateModel) {
        try {
            let result = await this.repository.findOneByOrFail({id})
            Object.keys(data).forEach(key => {
                if (data[key] !== undefined) result[key] = data[key]
            })
            result = await this.repository.save(result)
            delete result.password
            return result
        } catch (e) {
            if (e instanceof EntityNotFoundError) throw new HttpException("пользователь не найден", 404)
            if (e instanceof QueryFailedError) throw new HttpException(
                `пользователь ${data.login} уже зарегистрирован`,
                400)
        }
    }

    async delete(id: number) {
        let result = await this.repository.delete({id: id})
        if (result["affected"] == 0) throw new HttpException("пользователь не найден", 404)
    }
}
