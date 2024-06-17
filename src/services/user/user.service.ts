import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    create() {
        return Promise.resolve(undefined);
    }

    getAll() {
        return Promise.resolve("fuck");
    }

    getById() {
        return Promise.resolve(undefined);
    }

    update() {
        return Promise.resolve(undefined);
    }

    delete() {
        return Promise.resolve(undefined);
    }
}
