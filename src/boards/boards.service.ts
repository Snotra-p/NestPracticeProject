import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import {v1 as uuid} from 'uuid';

@Injectable()
export class BoardsService {
    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
    // private boards: Board[]= [];

    // getAllBoards(): Board[]{
    //     return this.boards;
    // }

    // createBoard(createBoradDto: CreateBoardDto): Board{
    //     const {title,description} = createBoradDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title, // title:createBoradDto.title과 동일
    //         description, // description:description과 동일
    //         status: BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }
    // getBoardById(id: string): Board{
    //     const found = this.boards.find((board)=>board.id===id);
    //     if(!found){
    //         throw new NotFoundException(`Can't find Board with id ${id}`);
    //     }
    //     return found;
    // }
    // deleteBoard(id: string): void{
    //     const found = this.boards.find((board)=>board.id===id);
    //     this.boards.filter((board)=>board.id!==found.id);
    // }
}
