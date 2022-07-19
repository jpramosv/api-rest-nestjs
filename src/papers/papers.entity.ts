import { Author } from "src/author/author.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Papers{

  @PrimaryGeneratedColumn()
  papers_id: number;

  @Column()
  category_id: number;

  @Column()
  summary: string;

  @Column()
  first_paragraph: string;

  @Column()
  body: string;
  
  @Column()
  publish_date: string;


  @ManyToOne(()=>Author, (author)=>author.papers, {eager: true})
   author: Author;

}