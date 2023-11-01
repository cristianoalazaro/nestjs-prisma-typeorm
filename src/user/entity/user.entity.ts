import { IsEnum, IsOptional, isEnum } from "class-validator";
import { Role } from "../../enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn({ unsigned: true })
    id?: number;

    @Column({ length: 63 })
    name: string;

    @Column({ length: 127, unique: true })
    email: string;

    @Column({ length: 127 })
    password: string;

    @Column({ type: 'date', nullable: true })
    birthAt?: Date;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @Column({ default: Role.User })
    role: Role;
}