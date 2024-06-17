import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './services/user/user.module';
import { TaskModule } from './services/task/task.module';
import { ProjectModule } from './services/project/project.module';
import { BlockModule } from './services/block/block.module';

@Module({
  imports: [UserModule, TaskModule, ProjectModule, BlockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
