import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dtos/create-author.dto';

@Injectable()
export class AuthorService {

  constructor(
    @InjectRepository(Author)
    private repo: Repository<Author>
  ){}

  create(authorDto: CreateAuthorDto){

    const author = this.repo.create(authorDto);

    return this.repo.save(author)

  }

  findOne(id: number){
    if(!id){
      return null;
    }
    return this.repo.findOne(id);
  }

}
