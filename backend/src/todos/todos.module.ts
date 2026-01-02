import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from './todos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
})
export class TodosModule {}
