import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UsersEntity } from "../users/users.entity";

@Entity({ name: "basichealthunits" })
export class BasicHealthUnitsEntity {
    
    @PrimaryGeneratedColumn('uuid') // ou PrimaryGeneratedColumn()
    id: string;
    
    @Column({name: 'cnes', nullable: false })
    cnes: string;

    @ManyToOne(() => UsersEntity, user => user.user_id)
    @JoinColumn({ name: 'user_id' })
    user_id: UsersEntity;
}