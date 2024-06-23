import { Module } from '@nestjs/common';
import {UserModule} from "../user/user.module";
import {AuthService} from "./auth.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {PassportModule} from "@nestjs/passport";


@Module({
    imports: [UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),],
    providers: [AuthService],
})
export class AuthModule {}