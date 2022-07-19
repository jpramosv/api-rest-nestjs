import { Body, Controller, Post, UseGuards, Get, Param, NotFoundException } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dtos/create-author.dto';

@Controller('author')
export class AuthorController {

  constructor(
    private authorService: AuthorService
  ){}

  @Post()
  @UseGuards()
  createAuthor(@Body() body: CreateAuthorDto){

    return this.authorService.create(body);
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.authorService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

}
