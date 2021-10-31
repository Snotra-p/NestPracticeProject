import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Board } from "src/boards/board.entity";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'park',
    password: '1234',
    database: 'NestTest',
    entities: [Board],
    synchronize: true // 재실행할때 엔티티에서 수정된 값들을 반영하여 해당 테이블을 재생성.
}