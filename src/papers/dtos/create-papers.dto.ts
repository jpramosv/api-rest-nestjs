import { IsString, IsNumber } from "class-validator";
import { Author } from "src/author/author.entity";


export class CreatePaperDto{
  
  
    @IsNumber()
    category_id: number;
  
    @IsString()
    summary: string;
  
    @IsString()
    first_paragraph: string;
  
    @IsString()
    body: string;
    
    @IsString()
    publish_date: string;

    
}