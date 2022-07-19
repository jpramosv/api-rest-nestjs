import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { Papers } from "src/papers/papers.entity";
import { Author } from "src/author/author.entity";

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username:'admin',
  password: 'admin',
  port: 5432,
  host: '127.0.0.1',
  database: 'apis',
  synchronize: true,
  entities: [User, Papers, Author]

}