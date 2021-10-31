import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./boards-status.enum";

@Entity()
export class Board extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column("enum", {
        enum: BoardStatus,
        default: BoardStatus.PUBLIC
      })
    status : BoardStatus;
}