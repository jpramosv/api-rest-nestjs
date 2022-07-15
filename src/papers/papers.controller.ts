import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreatePaperDto } from './dtos/create-papers.dto';
import { PapersService } from './papers.service';
import { AuthGuard } from '../guards/auth.guards'
import { CurrentUser } from 'src/users/decoretors/current-user.decorator';
import { User } from 'src/users/user.entity';

@Controller('papers')
export class PapersController {

  constructor(private papersService: PapersService){}

  @Post()
  @UseGuards(AuthGuard)
  createPaper(@Body() body: CreatePaperDto, @CurrentUser() user: User){
    
    return this.papersService.create(body, user);

  }
}
