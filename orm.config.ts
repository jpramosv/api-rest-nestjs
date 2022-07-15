import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";
import { Papers } from "src/papers/papers.entity";

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username:'admin',
  password: 'admin',
  port: 5432,
  host: '127.0.0.1',
  database: 'api_rest',
  synchronize: true,
  entities: [User, Papers]

}