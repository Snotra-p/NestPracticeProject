import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService:BoardsService){}

    // @Get('/')
    // getAllBoards(): Board[]{
    //     return this.boardsService.getAllBoards();
    // }
    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     // @Body('title') title: string,
    //     // @Body('description') description: string
    //     @Body() createBoradDto: CreateBoardDto
    //     ): Board 
    // { // @Body('title') 이면 title만, 
    //     return this.boardsService.createBoard(createBoradDto)
    // }
    // @Get('/:id')
    // getBoardById(@Param('id') id: string): Board{
    //     return this.boardsService.getBoardById(id);
    // }
    // @Delete('/:id')
    // deleteBoard(@Param('id') id:string){
    //     this.boardsService.deleteBoard(id);
    // }
    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status',BoardStatusValidationPipe) status: BoardStatus
    // ){
    //     return this.boardsService.updateBoardStatus(id,status);
    // }
}
