import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorController } from './author.controller';
import { Author } from './author.entity';
import { AuthorService } from './author.service';

@Module({
  imports:[TypeOrmModule.forFeature([Author])],
  providers:[AuthorService],
  controllers:[AuthorController]
})
export class AuthorModule {}
