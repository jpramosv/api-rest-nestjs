import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaperDto } from './dtos/create-papers.dto';
import { Papers } from './papers.entity';

@Injectable()
export class PapersService {
  constructor(
  @InjectRepository(Papers) private repo: Repository<Papers>,
  ){}

  create(papersDto: CreatePaperDto){

    const papers = this.repo.create(papersDto)
    return this.repo.save(papers);

  }

   findOne(id: number){
    if(!id){
      return null;
    }
    return this.repo.findOne(id);
  }
  
}
