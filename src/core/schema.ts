import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 20})
    login: string

    @Column({type: "varchar", length: 100})
    password: string

    @CreateDateColumn()
    created_at: Date
}

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(
        () => User,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            nullable: false
        }
    )
    user: User

    @Column({type: "varchar", length: 50, nullable: false})
    title: string

    @Column({type: "varchar", length: 1000})
    description: string

    @CreateDateColumn()
    created_at: Date
}

@Entity()
export class Block {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Project,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            nullable: false
        })
    project: Project

    @Column({type: "varchar", length: 30})
    title: string

    @Column({type: "int", nullable: false})
    position: number
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Block,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            nullable: false
        })
    block: Block

    @Column({type: "varchar", length: 50, nullable: false})
    title: string

    @Column({type: "varchar", length: 1000})
    description: string

    @Column({type: "int", nullable: false})
    position: number

    @CreateDateColumn()
    created_at: Date
}
