import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Message } from "./message";
import { User } from "./user";

@Entity("Topic")
@Unique(["title"])
export class Topic {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @OneToMany(() => Message, message => message.topic, {cascade: true, onDelete: "CASCADE"})
    messages?: Message[];

    @ManyToOne(() => User, user => user.topics)
    user: User;
    
    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
      }
}