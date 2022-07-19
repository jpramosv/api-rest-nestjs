import { Papers } from "src/papers/papers.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(()=>Papers, (papers)=> papers.author)
  papers: Papers[];

}