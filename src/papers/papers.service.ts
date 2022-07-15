import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreatePaperDto } from './dtos/create-papers.dto';
import { Papers } from './papers.entity';

@Injectable()
export class PapersService {
  constructor(
  @InjectRepository(Papers) private repo: Repository<Papers>,
  ){}

  create(papersDto: CreatePaperDto, user: User){

    const papers = this.repo.create(papersDto)
    papers.author_id = user;
    return this.repo.save(papers);

  }
  
}
