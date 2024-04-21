import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "./user";
import { Topic } from "./topic";

@Entity("Message")
export class Message {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    content: string

    @ManyToOne(() => User, user => user.messages)
    author?: User

    @ManyToOne(() => Topic, topic => topic.messages, {onDelete: "CASCADE"})
    topic: Topic;

    @CreateDateColumn({default: new Date(Date.now())})
    created_at: Date;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        }
      }
}