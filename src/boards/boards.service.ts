import { Injectable } from '@nestjs/common';
import { Board,BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
    private boards: Board[]= [];

    getAllBoards(): Board[]{
        return this.boards;
    }

    createBoard(title: string, description: string): Board{
        const board: Board = {
            id: '333',
            title, // title:title과 동일
            description, // description:description과 동일
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }
}
