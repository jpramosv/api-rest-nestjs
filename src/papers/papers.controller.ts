import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { CreatePaperDto } from './dtos/create-papers.dto';
import { PapersService } from './papers.service';
import { AuthGuard } from '../guards/auth.guards'

@Controller('papers')
export class PapersController {

  constructor(private papersService: PapersService){}

  @Post()
  @UseGuards(AuthGuard)
  createPaper(@Body() body: CreatePaperDto){
    
    return this.papersService.create(body);

  }

  @Get('/:id')
  async findPaper(@Param('id') id: string) {
    const paper = await this.papersService.findOne(parseInt(id));
    if (!paper) {
      throw new NotFoundException('paper not found');
    }
    return paper;
  }
}
