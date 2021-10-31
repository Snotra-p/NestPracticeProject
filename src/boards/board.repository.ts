
import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";

// import { Board } from "./board.entity";
// import { Board } from "./entity/board.entity";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board>{

}