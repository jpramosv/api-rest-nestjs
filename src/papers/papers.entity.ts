import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { User } from "src/users/user.entity";

@Entity()
export class Papers{

  @PrimaryGeneratedColumn()
  papers_id: number;

  @ManyToOne(()=> User, (user) => user.papers)
  author_id: User;

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


}