import { Module } from '@nestjs/common';
import { PapersService } from './papers.service';
import { PapersController } from './papers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Papers } from './papers.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Papers])],
  providers: [PapersService],
  controllers: [PapersController]
})
export class PapersModule {}
